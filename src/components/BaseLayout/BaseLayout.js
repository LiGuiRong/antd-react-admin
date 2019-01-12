import React, { Component } from 'react';
import { Layout } from 'antd';
import BaseHeader from '../BaseHeader/BaseHeader';
import BaseSider from '../BaseSider/BaseSider';
import BaseBreadcrumb from '../BaseBreadcrumb/BaseBreadcrumb';
const { Content, Footer} = Layout;

class BaseLayout extends Component {
  render() {
    return (
      <Layout>
        <BaseSider {...this.props} />
        <Layout style={{minHeight: '100vh'}}>
          <BaseHeader {...this.props} />
          <Content style={{padding: "0 50px"}}>
            <BaseBreadcrumb {...this.props} />
            <div style={{background: "#fff", padding: 24, minHeight: 480, marginTop: 20}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign: "center"}}>NeedAdmin ©2019 Created by LiGuiRong</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
