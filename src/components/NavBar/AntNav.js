import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import { IndexLink, Link } from 'react-router'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class AntNav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      current: 'home'
    }
    console.log(this.props)
  }

  handleClick (e) {
    console.log(e)
    this.setState({
      current: e.key
    })
  }

  render () {

    // let {
    //   location: { pathname }   // 通过 App 传入
    // } = this.props

    return (
      <div className="clearfix">
        <div className="navbar-header">
          <IndexLink to='/' className="navbar-brand">
            React Test
          </IndexLink>
        </div>
        <Menu onClick={e=>this.handleClick(e)} mode="horizontal" selectedKeys={[this.state.current]}>
          <Menu.Item key="msg">
            <Link to='/msgList'>
              <Icon type="appstore"/> Message
            </Link>
          </Menu.Item>
          <Menu.Item key="todo">
            <Link to='/todo'>
              <Icon type="setting"/> Work
            </Link>
          </Menu.Item>
          <Menu.Item key="map">
            <Link to="map">
              <Icon type=""/>Map
            </Link>
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting"/>Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">gourp 1-1</Menu.Item>
              <Menu.Item key="setting:2">gourp 1-3</Menu.Item>
            </MenuItemGroup>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default AntNav
