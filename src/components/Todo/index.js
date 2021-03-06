import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo, completeTodo, restoreTodo, setVisibilityFilter, VisibilityFilters} from '../../redux/actions/todoAction'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class Todo extends Component {
  static propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE'
    ]).isRequired
  }

  render () {
    // Injected by connect() call:
    const {dispatch, visibleTodos, visibilityFilter} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          }/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          }
          onRestoreClick={index=>
            dispatch(restoreTodo(index))
          }/>
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }/>
      </div>
    )
  }
}

function selectTodos (todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select (state) {
  return {
    visibleTodos: selectTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(Todo) 中；
export default connect(select)(Todo)
