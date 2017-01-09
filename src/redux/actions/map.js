import MapService from '../../services/MapService'
/**
 * action
 * @type {string}
 */
export const SHOW_MAPDATA = 'SHOW_MAPDATA'

const showMapData = () => {
  let mapData = MapService.getMapData().then(data=> {
    return data
  })
  return {
    type: SHOW_MAPDATA,
    data: mapData
  }
}

export {
  showMapData
}
