/**
 * Created by linxins on 16-12-31.
 * 项目经验
 */
import React, {Component} from 'react'
import {Timeline, Icon} from 'antd'

class ProjectExperience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        <div className="panel panel-default">
          <div className="panel-heading">项目经验</div>
          <div className="panel-body">
            <Timeline>
              {
                this.props.projectExperience.map((exp) => {
                  return (
                    <Timeline.Item color={exp.isPrimary ? 'red' : ''} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} ></Icon>}>
                      <p>{exp.timeAndName}</p>
                      <p>{exp.env}</p>
                      <p>{exp.tech}</p>
                      <p>{exp.projectDes}</p>
                      <p>{exp.jobDes}</p>
                    </Timeline.Item>
                  )
                })
              }
            </Timeline>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectExperience
