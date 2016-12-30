/**
 * Created by linxins on 16-12-31.
 * 工作经历
 */
import React, {Component} from 'react'
import {Timeline, Icon} from 'antd'

class WorkExperience extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        <div className="panel panel-default">
          <div className="panel-heading">工作经历</div>
          <div className="panel-body">
            <Timeline>
              {
                this.props.workExperience.map((exp) => {
                  return (
                    <Timeline.Item color={exp.isPrimary ? 'red' : ''} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} ></Icon>}>
                      <p>{exp.timeSlot}</p>
                      <p>{exp.companyName}</p>
                      <p>{exp.job}</p>
                      <p>{exp.describe}</p>
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

export default WorkExperience
