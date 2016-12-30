import React, {Component} from 'react'

class PreviewList extends Component {
  // static defaultProps = {
  //   ...this.props
  // }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.articleList.map((item) => {
              return <li>name:{item.name} time:{item.time}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default PreviewList
