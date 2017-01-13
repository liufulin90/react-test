import React, {Component} from 'react'
import Map from '../../components/Map/'

class MapView extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    return (
      <div>
        <Map/>
      </div>
    )
  }
}

export default MapView
