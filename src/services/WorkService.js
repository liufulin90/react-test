import Ajax from '../utils/ajax'

class WorkService {
  /**
   * 获取工作经验
   * @returns {Promise.<TResult>|*}
   */
  getWorkExperience() {
    let url = '/static/api/workExperience.json'
    return Ajax({url: url, method: 'GET'}).then(response => response.json()).catch(error => console.error(error))
  }

  getProjectExperience() {
    let url = '/static/api/projectExperience.json'
    return Ajax({url: url, method: 'GET'}).then(response => response.json()).catch(error => console.error(error))
  }
}

// 实例化后再导出
export default new WorkService()
