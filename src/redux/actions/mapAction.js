import MapService from '../../services/MapService'
/**
 * action 类型
 * @type {string}
 */
export const SHOW_MAPDATA = 'SHOW_MAPDATA'

/**
 * 获取地图位置信息数据
 * @param dispatch
 */
const showMapData = dispatch => MapService.getMapData().then(data=>dispatch({
    type: SHOW_MAPDATA,
    ...data
  })
)

export {
  showMapData
}

