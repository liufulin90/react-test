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
              return <li>Name: {data.name} Lat: {data.lnglat[1]} Lon: {data.lnglat[0]}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default AddressList
