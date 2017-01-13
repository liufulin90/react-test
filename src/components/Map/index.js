import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showMapData} from '../../redux/actions/mapAction'

import AddressList from './AddressList'
import MapContainer from './MapContainer'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapdata: []
    }
    const {dispatch} = this.props
    dispatch(showMapData()).mapdata.then((res) => {
      this.setState({
        mapdata: res.data
      })
    })
  }

  render() {

    return (
      <div>
        <MapContainer {...this.state}/>
        <AddressList {...this.state}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    mapdata: state.mapdata
  }
}
// export default Map
export default connect(mapStateToProps)(Map)