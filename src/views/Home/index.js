import React, {Component} from 'react'
import Todo from '../../components/Todo/'

class HomeView extends Component {

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
        Please add something...
        <Todo />
      </div>
    )
  }
}

export default HomeView
