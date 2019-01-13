import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import siderMap from './siderMap';
const { Sider } = Layout;

function renderSiderItem(item) {
  if (!item.hasSubMenu) {
    return (
      <Menu.Item key={item.key}>
        <Link to={item.toPath}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
    );
  } else {
    return (
      <Menu.SubMenu 
        key={item.key} 
        title={
          <span><Icon type={item.icon}/><span>{item.title}</span></span>
        }
      >
        {item.sub.map(subItem => renderSiderItem(subItem) )}
      </Menu.SubMenu>
    );
  }
}

// 获取常规版本的子目录
function getNormalSub() {
  // console.log()
}
// 获取快开版本的子目录
function getQuickSub() {
  // console.log()
}

// 需要将获取到的版本日期数据导入导航栏配置文件中
const siderItems = siderMap.map(item => renderSiderItem(item));

class BaseSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed
    })
  }
  render() {
    const { collapsed } = this.state;
    return (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          <div style={{ height: 32, background: "#aaa", margin: 16 }} />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
          >
           {siderItems}
          </Menu>
        </Sider>
    );
  }
}

export default BaseSider;
