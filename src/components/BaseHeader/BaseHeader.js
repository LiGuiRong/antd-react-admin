import React, { Component } from 'react';
import { Layout, Icon, Button, Modal, Form, Input } from 'antd';
const {Header} = Layout;

class BaseHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      moduleTitle: '登陆'
    }
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOk = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        visible: false
      })
    }, 1000)
  }
  handleCancle = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
        <Header style={{background: "#fff"}}>
            <Button key="h1" type="primary" size="default" onClick={this.showModal}>登陆</Button>
            <Button key="h2" type="danger" size="default" style={{marginLeft: 20}}>注册</Button>
            <Modal
                visible={this.state.visible}
                title={this.state.moduleTitle}
                onOk={this.handleOk}
                onCancel={this.handleCancle}
                footer={[
                    <Button type="primary" size="default" onClick={this.handleOk}>{this.state.moduleTitle}</Button>
                ]}
            >
            <Form layout="vertical">
                <Form.Item key="f1">
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </Form.Item>
                <Form.Item key="f2">
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </Form.Item>
            </Form>
            </Modal>
        </Header>
    );
  }
}

export default BaseHeader;
