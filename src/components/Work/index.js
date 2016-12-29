import React, {Component} from 'react'

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workList: [
        {
          name: '学习react',
          time: '2016-12-12'
        },
        {
          name: '学习angular',
          time: '2016-10-12'
        },
        {
          name: '学习vue',
          time: '2017-1-19'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.workList.map((w) => {
              return <li><b>完成事项：</b>{w.name}, 时间：{w.time}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Work
