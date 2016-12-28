import React, {Component} from 'react'
import {Tooltip, Timeline, Modal, Button, Icon} from 'antd'

class MsgList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          name: 'xxx',
          time: '2016/12/12'
        },
        {
          name: 'mm',
          time: '2016/1/8'
        }
      ],
      visible: false
    }
  }

  const
  showModal = (e) => {
    this.setState({
      visible: true
    })
    console.log(this.state.visible)
  }

  const
  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  const
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map(item =>
              <li>{item.name}</li>
            )
          }
        </ul>
        <Tooltip placement="top" title="prompt text">
          <span>Tooltip will show when mouse enter.</span>
        </Tooltip>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item color="red" dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} ></Icon>}>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
        <Button type="primary" onClick={this.showModal}>Open a Modal</Button>
        <Modal title="Base Modal" visible={this.state.visible}
               onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default MsgList
