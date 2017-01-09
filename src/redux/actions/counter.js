/*
 * action 类型
 */

export const ADD_COUNT = 'ADD_COUNT'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function increment (data) {
  return {type: ADD_COUNT, data: data + 1}
}

export function toggleTodo (index) {
  return {type: TOGGLE_TODO, index}
}

export function setVisibilityFilter (filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}
