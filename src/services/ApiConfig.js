/**
 * 所有外部接口配置路径
 */
const apiUrlConfig = () => {
  if (__DEV__) {
    let apiRoot = '/static/api'
    return {
      gaodeMapLatLon: `${apiRoot}/gaodeMapLatLon.json`, // 获取地图信息
      workExperience: `${apiRoot}/workExperience.json`, // 获取工作经验
      projectExperience: `${apiRoot}/projectExperience.json` // 获取项目经验
    }
  } else {
    return {
      gaodeMapLatLon: ''
    }
  }
}

export {
  apiUrlConfig
}
