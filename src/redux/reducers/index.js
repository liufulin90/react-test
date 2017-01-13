import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import store from '../store/'
// import userReducer from 'REDUCER/user'
import todoApp from './todoReducer'
import mapApp from './mapReducer'

// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
const syncReduces = {
  router: routerReducer,
  // ,userData: userReducer //有数据就依次添加reducer
  todoApp: todoApp,
  mapApp: mapApp
}

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {}

/**
 * @returns {Function} rootReducer
 */
export function createRootReducer() {
  return combineReducers({
    ...syncReduces,
    ...asyncReducers
  })
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
export function injectReducer(key, reducer) {
  asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer()) // 替换当前的 rootReducer
}
