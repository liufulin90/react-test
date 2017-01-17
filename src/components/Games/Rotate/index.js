import React, {Component} from 'react'
import './rotate.scss'
import mRotate from './mRotate'

class Rotate extends Component {
  constructor(props) {
    super(props)
    // 奖品数据
    this.state = {
      isRotate: false,
      prizeData: [
        {
          id: 1,
          prize: '一等奖',
          angle: 3600
        }, {
          id: 2,
          prize: '二等奖',
          angle: 3720
        }, {
          id: 3,
          prize: '三等奖',
          angle: 3840
        }, {
          id: 4,
          prize: '再接再厉',
          angle: 3750
        }, {
          id: 5,
          prize: '要加油哦',
          angle: 3865
        }, {
          id: 6,
          prize: '谢谢参与',
          angle: 3930
        }
      ]
    }

    // var arrow = document.getElementById('ww_arrow'),
    //   plate = document.getElementById('ww_plate')
  }

  const
  onArrowClick = () => {
    let self = this
    if (self.state.isRotate) return
    this.setState({
      isRotate: true
    })
    let priData = this.state.prizeData
    var num = (Math.random() * priData.length) >> 0
    var data = priData[num]

    console.log(num)
    console.time('计时')

    mRotate({
      el: '#ww_plate',
      angle: 90,
      animateTo: data.angle,
      duration: 1000,
      easeing: 'easeInOutCirc',
      end: function () {
        console.timeEnd('计时')
        self.setState({
          isRotate: false
        })
//        alert(data.prize)
        console.info(data.prize)
      }
    })
  }

  render() {
    return (
      <div>
        <div id="ww_page">
          <div id="ww_box">
            <div id="ww_rotate">
              <div id="ww_plate"></div>
              <div id="ww_arrow" onClick={this.onArrowClick}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rotate
