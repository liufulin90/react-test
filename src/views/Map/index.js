import React, {Component} from 'react'
import MapContainer from '../../components/Map/MapContainer'
import MapService from '../../services/MapService'

class Map extends Component {

  constructor (props) {
    super(props)
    this.state = {
      mapdata: null
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
        <MapContainer mapdata={this.state.mapdata}/>
      </div>
    )
  }
}

export default Map
