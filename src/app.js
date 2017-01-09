import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import {Router, hashHistory} from 'react-router'
import {Router} from 'react-router'
import routes from './routes/'
import store, {history} from './redux/store/'


const mountNode = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes}/>
  </Provider>,
  mountNode
)
