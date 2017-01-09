import React, {Component} from 'react'
import {createStore} from 'redux'
import Counter from '../../containers/CounterContainer'
import Todo from './Todo'
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 */
function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(()=> {
  console.log(store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      messages: [
        {
          name: 'xxx',
          time: '2016/12/12'
        }
      ],
      visibleTodos: [{
        text: 'xxxxx',
        completed: true
      }]
    }
  }


  render () {
    return (
      <div>
        home
        <Todo {...this.state}/>
        <Counter counter="1"></Counter>
      </div>
    )
  }
}

export default Home
