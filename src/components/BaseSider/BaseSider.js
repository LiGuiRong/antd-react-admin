import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

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
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div style={{ height: 32, background: "#aaa", margin: 16 }} />
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.SubMenu
              key="需求管理"
              title={<span><Icon type="schedule"/><span>需求管理</span></span>}
            >
              <Menu.SubMenu key="g3" title={<span><Icon type="form"/><span>需求录入</span></span>}>
                <Menu.Item key="g3_1">
                  <Link to="/welcome">
                    <Icon type="edit" />
                    <span>手工录入</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="g3_2">
                  <Link to="/need">
                    <Icon type="export" />
                    <span>文件导入</span>
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="g1" title={<span><Icon type="tag"/><span>常规版本</span></span>}>
                <Menu.Item key="g1_1">
                  <Icon type="calendar" />
                  <span>20190110</span>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="g2" title={<span><Icon type="rocket"/><span>快开版本</span></span>}>
                <Menu.Item key="g2_1">
                  <Icon type="calendar" />
                  <span>20190115</span>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="g4_2">
                <Icon type="lock"/>
                <span>归档需求</span>
              </Menu.Item>
              <Menu.Item key="j2">
                <Icon type="desktop"/>
                <span>需求评审</span>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="d2">
              <Link to="/codereview">
                <Icon type="code"/>
                <span>代码评审</span>
              </Link>
            </Menu.Item>
            <Menu.SubMenu
              key="用户管理"
              title={<span><Icon type="team"/><span>用户管理</span></span>}
            >
              <Menu.Item key="i3">
                <Icon type="appstore"/>
                <span>权限管理</span>
              </Menu.Item>
              <Menu.Item key="o5">
                <Icon type="solution" />
                <span>人力管理</span>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="a6">
              <Icon type="user"/>
              <span>个人中心</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default BaseSider;
