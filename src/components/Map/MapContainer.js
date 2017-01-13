import React, {Component} from 'react'
import './MapContainer.scss'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bdMap: window.BMap,
      GDMap: window.AMap,
      mapdata: this.props.mapdata
    }
  }

  componentWillMount () {
    // this.setState({})

    console.log('@@', this.props.mapdata)
  }

  const
  initBaiduMap = ()=> {
    var bdMap = this.state.bdMap
    var map = new bdMap.Map('allmap')
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new bdMap.Point(116.404, 39.915), 11)
    // 添加地图类型控件
    map.addControl(new bdMap.MapTypeControl())
    // 设置地图显示的城市 此项是必须设置的
    // map.setCurrentCity('北京')
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true)
  }

  /**
   * 初始化高德地图
   */
  const
  initGaodeMap = ()=> {
    let GDMap = this.state.GDMap
    let map = new GDMap.Map('allmap2', {
      center: [112.403, 37.915],
      zoom: 4
    })
    let citys = this.props.mapdata
    let mass = new GDMap.MassMarks(citys, {
      url: '/static/images/mark_b.png',
      anchor: new GDMap.Pixel(5, 9),
      size: new GDMap.Size(7, 9),
      opacity: 0.7,
      cursor: 'pointer',
      zIndex: 1
    })
    let marker = new GDMap.Marker({
      content: ' ',
      map: map
    })
    mass.on('mouseover', function (e) {
      marker.setPosition(e.data.lnglat)
      marker.setLabel({content: `<font color="red">${e.data.name}</font>`})
    })
    mass.setMap(map)
  }

  componentDidMount () {
    // 初始化百度地图
    // this.initBaiduMap()
    setTimeout(()=> {
      // 延时为了得到 this.props.mapdata
      // 初始化高德地图
      this.initGaodeMap()
    }, 1500)
  }

  componentWillReceiveProps () {
    // this.initGaodeMap()
  }

  render () {
    return (
      <div>
        {/* <div id='allmap'></div> */}
        <div id='allmap2'></div>
      </div>
    )
  }

}

export default MapContainer
