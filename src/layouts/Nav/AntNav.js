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
  }

  handleClick (e) {
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
        <Menu onClick={e=>this.handleClick(e)} mode="horizontal" selectedKeys={[this.state.current]}>
          <IndexLink to='/' className="navbar-brand">
            RT
          </IndexLink>
          <Menu.Item key="home">
            <Link to='/home'>
              <Icon type="appstore"/> Home
            </Link>
          </Menu.Item>
          <Menu.Item key="work">
            <Link to='/work'>
              <Icon type="setting"/> Work
            </Link>
          </Menu.Item>
          <Menu.Item key="map">
            <Link to="/map">
              <Icon type="environment-o"/>Map
            </Link>
          </Menu.Item>
          <Menu.Item key="games">
            <Link to="/games">
              <Icon type="smile-o"/>Games
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
