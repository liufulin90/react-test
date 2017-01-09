import React, {Component} from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.counter
    }
    console.log(this.props)
  }

  render () {
    return (
      <button onClick={this.props.onIncrement}>
        Button:{this.props.value}
      </button>
    )
  }
}

export default Counter
