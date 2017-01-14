import Ajax from '../utils/ajax'
import {apiUrlConfig} from './ApiConfig'

class WorkService {
  /**
   * 获取工作经验
   * @returns {Promise.<TResult>|*}
   */
  getWorkExperience() {
    let url = apiUrlConfig().workExperience
    return Ajax({url: url, method: 'GET'}).then(response => response.json()).catch(error => console.error(error))
  }

  /**
   * 获取项目经验
   * @returns {Promise.<T>}
   */
  getProjectExperience() {
    let url = apiUrlConfig().projectExperience
    return Ajax({url: url, method: 'GET'}).then(response => response.json()).catch(error => console.error(error))
  }
}

// 实例化后再导出
export default new WorkService()
