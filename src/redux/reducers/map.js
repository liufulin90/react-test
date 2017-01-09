import {SHOW_MAPDATA} from '../actions/map'

function mapReducer (state = [], action) {
  switch (action.type) {
    case SHOW_MAPDATA:
      return state
    default:
      return state
  }
}

export default mapReducer()
