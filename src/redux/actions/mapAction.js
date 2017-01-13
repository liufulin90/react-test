import MapService from '../../services/MapService'
/**
 * action 类型
 * @type {string}
 */
export const SHOW_MAPDATA = 'SHOW_MAPDATA'

export function showMapData() {
  return {
    type: SHOW_MAPDATA,
    mapdata: MapService.getMapData()
  }
}

