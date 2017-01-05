import React, {Component} from 'react'
// import MapContainer from '../../components/Map/MapContainer'
import AddressList from '../../components/Map/AddressList'
import MapService from '../../services/MapService'

class Map extends Component {

  constructor(props) {
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

  render() {
    return (
      <div>
        <AddressList {...this.state}/>
      </div>
    )
  }
}

export default Map
