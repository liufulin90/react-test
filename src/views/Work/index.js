import React, {Component} from 'react'
import WorkExperience from '../../components/Work/WorkExperience'
import ProjectExperience from '../../components/Work/ProjectExperience'
import WorkService from '../../services/WorkService'

class Work extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      workExperience: [],
      projectExperience: []
    }
    WorkService.getWorkExperience().then(data=>{
      this.setState({
        workExperience: data.data
      })
    })
    WorkService.getProjectExperience().then(data=>{
      this.setState({
        projectExperience: data.data
      })
    })
  }

  render() {
    return (
      <div>
        <WorkExperience {...this.state}/>
        <ProjectExperience projectExperience={this.state.projectExperience}/>
      </div>
    )
  }
}

export default Work
