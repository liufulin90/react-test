/**
 *
 * @param options
 * @constructor
 */
function FWC (options) {
  // set default options
  options = options || {}

  options.sound = options.sound || false
  options.opacity = options.opacity || 1
  options.width = options.width || document.querySelector('body').clientWidth
  options.height = options.height || document.querySelector('body').clientHeight

  var fireworksField = document.getElementById(options.el)
  var particles = [] // 爆炸颗粒
  var rockets = [] // 颗粒发射
  var MAX_PARTICLES = 400 // 颗粒最大数
  var SCREEN_WIDTH = options.width // 烟花可视的宽度
  var SCREEN_HEIGHT = options.height // 烟花的可是高度

  // create canvas and get the context
  let canvas = document.createElement('canvas')
  canvas.id = 'fireworksField'
  canvas.width = SCREEN_WIDTH
  canvas.height = SCREEN_HEIGHT
  canvas.style.width = SCREEN_WIDTH + 'px'
  canvas.style.height = SCREEN_HEIGHT + 'px'
  canvas.style.position = 'absolute'
  canvas.style.left = 0
  canvas.style.top = 0
  canvas.style.opacity = options.opacity

  let context = canvas.getContext('2d')

  /**
   * 颗粒对象
   * @param pos
   * @constructor
   */
  function Particle (pos) {
    this.pos = {
      x: pos ? pos.x : 0,
      y: pos ? pos.y : 0
    }
    this.vel = {
      x: 0,
      y: 0
    }
    this.shrink = 0.97 // 收缩
    this.size = 2
    this.resistance = 1 // 阻力
    this.gravity = 0 // 重力

    this.flick = false // 晃动

    this.alpha = 1
    this.fade = 0
    this.color = 0
  }

  // 更新颗粒的状态（位置，大小，透明度。。。）
  Particle.prototype.update = function () {
    // 适用性
    this.vel.x *= this.resistance
    this.vel.y *= this.resistance

    // 重力向下
    this.vel.y += this.gravity

    // 基于速度更新位置
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y

    // shrink
    this.size *= this.shrink

    // fade out
    this.alpha -= this.fade
  }

  // 将颗粒渲染到画布上
  Particle.prototype.render = function (c) {
    if (!this.exists()) return

    // 保存当前环境的状态
    c.save()
    c.globalCompositeOperation = 'lighter' // globalCompositeOperation 属性设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上。1、源图像 = 您打算放置到画布上的绘图。2、目标图像 = 您已经放置在画布上的绘图。

    var x = this.pos.x
    var y = this.pos.y
    var r = this.size / 2

    // 创建放射状/环形的渐变（用在画布内容上）
    let gradient = c.createRadialGradient(x, y, 0.1, x, y, r)
    // 规定渐变对象中的颜色和停止位置
    gradient.addColorStop(0.1, `rgba(255,255,255,${this.alpha})`)
    gradient.addColorStop(0.8, `hsla(${this.color}, 100%, 50%, ${this.alpha})`)
    gradient.addColorStop(1, `hsla(${this.color}, 100%, 50%, 0.1)`)

    // 设置或返回用于填充绘画的颜色、渐变或模式
    c.fillStyle = gradient

    c.beginPath()
    // 创建弧/曲线（用于创建圆形或部分圆）
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true)

    c.closePath()
    // 填充当前绘图（路径）
    c.fill()

    // 返回之前保存过的路径状态和属性
    c.restore()
  }

  Particle.prototype.exists = function () {
    return this.alpha >= 0.1 && this.size >= 1
  }
  /**
   * 发射对象
   * @param x
   * @constructor
   */
  function Rocket (x) {
    Particle.apply(this, [{
      x: x,
      y: SCREEN_HEIGHT
    }])
    this.explosionColor = 0 // 爆炸的颜色
  }

  Rocket.prototype = new Particle()
  Rocket.prototype.constructor = Rocket

  Rocket.prototype.explode = function () {
    if (options.sound) {
      // let randomNumber = function (min, max) {
      //   min = Math.ceil(min)
      //   max = Math.floor(max)
      //   return Math.floor(Math.random() * (max - min + 1)) + min
      // }()
      // 随机播放声音
      // audio.src = sounds[randomNumber].prefix + sounds[randomNumber].data
      // audio.play()
    }

    let count = Math.random() * 10 + 80
    for (let i = 0; i < count; i++) {
      var particle = new Particle()
      var angle = Math.random() * Math.PI * 2 // 角度

      // 利用余弦模拟3D效果，并在中间放置更多粒子
      let speed = Math.cos(Math.random() * Math.PI / 2) * 15
      particle.vel.x = Math.cos(angle) * speed
      particle.vel.y = Math.sin(angle) * speed

      particle.size = 10

      particle.gravity = 0.2
      particle.resistance = 0.92
      particle.shrink = Math.random() * 0.05 + 0.93

      particle.flick = true
      particle.color = this.explosionColor

      particles.push(particle)
    }
  }

  Rocket.prototype.render = function (c) {
    if (!this.exists()) {
      return
    }
    c.save()

    c.globalCompositeOperation = 'lighter'

    var x = this.pos.x
    var y = this.pos.y
    var r = this.size / 2

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r)
    gradient.addColorStop(0.1, 'rgba(255, 255, 255 ,' + this.alpha + ')')
    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + this.alpha + ')')

    c.fillStyle = gradient

    c.beginPath()
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true)
    c.closePath()
    c.fill()

    c.restore()
  }

  var loop = function () {
    // update screen size
    if (SCREEN_WIDTH != window.innerWidth) {
      canvas.width = SCREEN_WIDTH = window.innerWidth
    }
    if (SCREEN_HEIGHT != window.innerHeight) {
      canvas.height = SCREEN_HEIGHT = window.innerHeight
    }

    // clear canvas
    context.fillStyle = 'rgba(0, 0, 0, 0.05)'
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

    var existingRockets = []
    if (typeof rockets[0].pos.y == 'string') {
      rockets.splice(0, 1)
    }
    for (let i = 0; i < rockets.length; i++) {
      // update and render
      rockets[i].update()
      rockets[i].render(context)

      // calculate distance with Pythagoras
      var distance = Math.sqrt(Math.pow(Math.floor(SCREEN_WIDTH - rockets[i].pos.x), 2) + Math.pow(Math.floor(SCREEN_HEIGHT - rockets[i].pos.y), 2))

      // random chance of 1% if rockets is above the middle
      var randomChance = rockets[i].pos.y < (SCREEN_HEIGHT * 2 / 3) ? (Math.random() * 100 <= 1) : false

      /* Explosion rules
       - 80% of screen
       - going down
       - close to the mouse
       - 1% chance of random explosion
       */
      if (rockets[i].pos.y < SCREEN_HEIGHT / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
        rockets[i].explode()
      } else {
        existingRockets.push(rockets[i])
      }
    }

    rockets = existingRockets

    var existingParticles = []

    for (let i = 0; i < particles.length; i++) {
      particles[i].update()

      // render and save particles that can be rendered
      if (particles[i].exists()) {
        particles[i].render(context)
        existingParticles.push(particles[i])
      }
    }

    // update array with existing particles - old particles should be garbage collected
    particles = existingParticles

    while (particles.length > MAX_PARTICLES) {
      particles.shift()
    }
  }

  var launchFrom = function (x) {
    if (rockets.length < 10) {
      var rocket = new Rocket(x)
      rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10
      rocket.vel.y = Math.random() * -3 - 4
      rocket.vel.x = Math.random() * 6 - 3
      rocket.size = 8
      rocket.shrink = 0.999
      rocket.gravity = 0.01
      rockets.push(rocket)
    }
  }

  var launch = function () {
    launchFrom(SCREEN_WIDTH / 2)
  }


  // Append the canvas and start the loops
  fireworksField.appendChild(canvas)
  setInterval(launch, 800)
  setInterval(loop, 1000 / 50)

  return fireworksField
}

export default FWC
