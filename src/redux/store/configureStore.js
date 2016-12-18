import {createStore, compose, applyMiddleware} from 'redux'
import middlewares from './middlewares'
import enhancers from './enhancers'
import {createRootReducer} from '../reducers/'
import syncHistoryWithStore from './syncHistoryWithStore'

// ======================================================
// 实例化 Store
// ======================================================
const store = createStore(
  createRootReducer(),
  window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middlewares), // 应用中间件
    ...enhancers
  )
)

export default store
// ======================================================
// 增强版 history
// ======================================================
export const historyEnhanced = syncHistoryWithStore(store)
