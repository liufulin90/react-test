import React, {Component} from 'react'
import './MapContainer.scss'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    // const script1 = document.createElement('script')
    // script1.src = 'http://api.map.baidu.com/api?v=2.0&ak=VRh24alNeWQaQbNVYHZueaVe'
    // script1.type = 'text/javascript'
    // script1.async = true
    // document.head.appendChild(script1)
    // 百度地图API功能

  }

  componentDidMount () {
    var map = new window.BMap.Map('allmap')
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11)
    // 添加地图类型控件
    map.addControl(new window.BMap.MapTypeControl())
    // 设置地图显示的城市 此项是必须设置的
    // map.setCurrentCity('北京')
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true)
  }

  render () {
    return (
      <div>
        <div id='allmap'></div>
      </div>
    )
  }

}

export default MapContainer
