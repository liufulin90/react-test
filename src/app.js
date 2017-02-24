import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import routes from './routes/'
import store, {history} from './redux/store/'
import {getRandomInt} from 'js-common-tools'

const mountNode = document.getElementById('app')
console.log(getRandomInt())
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes}/>
  </Provider>,
  mountNode
)
