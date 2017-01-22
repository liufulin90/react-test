import React, {Component} from 'react'
import FWC from './FWC'

class FireWork extends Component {
  constructor (props) {
    super(props)
  }

  const
  initFW = ()=> {
    return new FWC({
      el: 'demo',
      sound: false, // sound effect
      opacity: 0.9,
      width: '100%',
      height: '100%'
    })
  }

  render () {
    setTimeout(()=>{
      this.initFW()
    }, 1000)

    return (
      <div id="demo" style={{position: 'relative', background: 'black', height: '90vh', overflow: 'hidden'}}></div>
    )
  }
}

export default FireWork


