import React, {Component} from 'react'
import AddressList from './AddressList'
import MapContainer from './MapContainer'
import MapService from '../../services/MapService'

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mapdata: []
    }
    MapService.getMapData().then(data => {
      this.setState({
        mapdata: data.data
      })
    })
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
