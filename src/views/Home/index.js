import React, {Component} from 'react'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          name: 'xxx',
          time: '2016/12/12'
        }
      ]
    }
  }


  render() {
    return (
      <div>
        home
      </div>
    )
  }
}

export default Home
