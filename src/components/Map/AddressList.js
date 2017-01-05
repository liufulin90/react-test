import React, {Component} from 'react'
import './AddressList.scss'

class AddressList extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="address-wrap">
        <ul>
          {
            this.props.mapdata.map(data=> {
              return <li>Lat: {data.lat} Lon: {data.lon}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default AddressList
