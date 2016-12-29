import React, {Component} from 'react'
import AntNav from './AntNav'

class NavBar extends Component {
  static defaultProps = {
    navs: [
      {id: 1, name: 'Home'},
      {id: 2, name: 'Live'},
      {id: 3, name: 'message'}
    ]
  }

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.navs)
    return (
      <AntNav />
    )
  }
}

export default NavBar
