import React, {Component} from 'react'
import FWC from './FWC'

class FireWork extends Component {
  constructor(props) {
    super(props)
  }

  const
  initFW = () => {
    var fwc = new FWC({
      el: 'demo',
      sound: false, // sound effect
      opacity: 0.9,
      width: '100%',
      height: '100%'
    })
    document.getElementById('fireStart').addEventListener('click', () => {
      fwc.restart()
    })
    document.getElementById('fireStop').addEventListener('click', () => {
      fwc.stop()
    })
    document.getElementById('fireShow').addEventListener('click', () => {
      fwc.show()
    })
    document.getElementById('fireHide').addEventListener('click', () => {
      fwc.hide()
    })
    document.getElementById('fireOpenSound').addEventListener('click', () => {
      fwc.openSound()
    })
    document.getElementById('fireCloseSound').addEventListener('click', () => {
      fwc.closeSound()
    })
    return fwc
  }


  render() {
    setTimeout(() => {
      this.initFW()
    }, 1000)
    let demoStyle = {
      position: 'relative',
      background: 'black',
      height: '80vh',
      width: '100%',
      overflow: 'hidden'
    }
    return (
      <div>
        <button id="fireStart">开始</button>&nbsp;
        <button id="fireStop">停止</button>&nbsp;
        <button id="fireShow">启动</button>&nbsp;
        <button id="fireHide">清除</button>&nbsp;
        <button id="fireOpenSound">开启声音</button>&nbsp;
        <button id="fireCloseSound">关闭声音</button>&nbsp;
        <div id="demo" style={demoStyle}></div>
      </div>
    )
  }
}

export default FireWork


