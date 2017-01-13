// import {combineReducers} from 'redux'
import {SHOW_MAPDATA} from '../actions/mapAction'

function mapReducer (state = [], action) {
  switch (action.type) {
    case SHOW_MAPDATA:
      return {
        mapdata: action.mapdata
      }
    default:
      return state
  }
}

// const mapApp = combineReducers({
//   mapReducer
// })
export default mapReducer
