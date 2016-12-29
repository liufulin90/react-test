import React, {Component} from 'react'

class Map extends Component {
  static defaultProps = {
    mapData: [
      {
        lat: 12.2234,
        lon: 137.33234
      },
      {
        lat: 14.2234,
        lon: 137.33234
      }
    ]
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        mapdata: { JSON.stringify(this.props.mapData)}
      </div>
    )
  }

}

export default Map
