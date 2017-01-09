import Ajax from '../utils/ajax'

class MapService {
  /**
   * 获取地图信息
   * @returns {Promise.<TResult>|*}
   */
  getMapData () {
    // let url = '/static/api/mapLatLon.json'
    let url = '/static/api/gaodeMapLatLon.json'

    return Ajax({url: url, method: 'GET'}).then(response => response.json()).catch(error=>console.error(error))
  }
}

// 实例化后再导出
export default new MapService()
