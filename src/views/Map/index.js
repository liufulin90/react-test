import React, {Component} from 'react'
import MapContainer from '../../components/Map/MapContainer'
import AddressList from '../../components/Map/AddressList'
import MapService from '../../services/MapService'

class Map extends Component {

  constructor (props) {
    super(props)
    this.state = {
      mapdata: []
    }
    console.log('constructor')
    MapService.getMapData().then(data => {
      this.setState({
        mapdata: data.data
      })
    })
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    return (
      <div>
        <MapContainer {...this.state}/>
        <AddressList {...this.state}/>
      </div>
    )
  }
}

export default Map
