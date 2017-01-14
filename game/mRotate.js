/**
 * LBS Rotate
 * Date: 2014-12-20
 * ==================================
 * opts.el 旋转对象(一个字符串的CSS选择器或者元素对象)
 * opts.angle 初始角度 默认0
 * opts.animateTo 目标角度
 * opts.duration 持续时间 默认1000(毫秒)
 * opts.easing 动画效果 (easeOutSine默认 easeInOutSine easeInOutCirc)
 * opts.end 旋转完成 执行函数
 * ==================================
 **/
var Rotate = function (opts) {
  opts = opts || {};
  if (typeof opts.el === undefined) return;
  this.el = typeof opts.el === 'string' ? document.querySelector(opts.el) : opts.el;
  this.angle = opts.angle || 0;
  this.animateTo = opts.animateTo || this.angle + 360;
  this.duration = opts.duration || 1000;
  this.easing = (opts.easing && this.tween[opts.easing]) || this.tween.easeOutSine;
  this.end = opts.end || function () {
    };
  this.animated = false;
  this.init();
};
Rotate.prototype = {
  init: function () {
    this.rotate(this.angle);
    this.start();
  },
  start: function () {
    this.animate();
  },
  animate: function () {
    if (this.animated) return;
    var start = this.angle,
      end = this.animateTo,
      change = end - start,
      duration = this.duration,
      startTime = +new Date(),
      ease = this.easing,
      _this = this;
    if (start == end) {
      this.end && this.end();
      return;
    }
    this.animated = true;
    !function animate() {
      var nowTime = +new Date(),
        timestamp = nowTime - startTime,
        delta = ease(timestamp / duration);
      _this.rotate(start + delta * change);
      if (duration <= timestamp) {
        _this.rotate(end);
        _this.animated = false;
        _this.end && _this.end();
      } else {
        setTimeout(animate, 17);
      }
    }();
  },
  rotate: function (angle) {
    this.setTransform(angle % 360);
  },
  setTransform: function (v) {
    v = v || 0;
    this.setStyle(this.el, 'transform', 'rotate(' + v + 'deg)');
  },
  setStyle: function (el, p, v) {
    !this.cache && (this.cache = {});
    !this.cache[el] && (this.cache[el] = {});
    !this.cache[el][p] && (this.cache[el][p] = this.prefix(p));
    el.style[this.cache[el][p] || this.prefix(p)] = v;
  },
  prefix: function (p) {
    var style = document.createElement('div').style;
    if (p in style) return p;
    var prefix = ['webkit', 'Moz', 'ms', 'O'],
      i = 0,
      l = prefix.length,
      s = '';
    for (; i < l; i++) {
      s = prefix[i] + '-' + p;
      s = s.replace(/-\D/g, function (match) {
        return match.charAt(1).toUpperCase();
      });
      if (s in style) return s;
    }
  },
  tween: {
    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
      return (-.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutCirc: function (pos) {
      if ((pos /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    }
  }
};