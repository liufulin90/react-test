import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  render() {
    let listyle = {display: 'flex', justifyContent: 'space-between', padding: '5px 0'}
    let restoreStyle = {cursor: 'pointer'}
    return (
      <li style={listyle}>
        <div
          onClick={this.props.onClick}
          title={this.props.completed ? '' : 'Please click to complete!'}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}
        >{`时间：${this.props.time}   事项：${this.props.text}`}</div>
        <div onClick={this.props.onRestore} style={restoreStyle}>Restore</div>
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
