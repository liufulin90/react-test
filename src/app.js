import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import routes from './routes/'
import store, {history} from './redux/store/'
import * as JST from 'js-common-tools'

const mountNode = document.getElementById('app')
let testKey = 'jjj'
JST.setLocalStorage(testKey, 'test names')
console.log(JST.getLocalStorage(testKey))
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes}/>
  </Provider>,
  mountNode
)
