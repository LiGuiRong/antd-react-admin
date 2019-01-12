import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const breadcrumbNameMap = {
    '/welcome': '首页',
    '/need': '需求管理',
    '/need/import': '需求录入',
    '/codereview': '代码评审'
}

class BaseBreadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathSnippets: [],
            extraBreadcrumbItems: []
        }
    }
    getPath() {
        const urls = window.location.pathname.split('/').filter(i => i);
        this.setState({
            pathSnippets: urls,
            extraBreadcrumbItems: urls.map((_, index) => {
                const url = `/${urls.slice(0, index + 1).join('/')}`;
                return (
                    <Breadcrumb.Item key={url}>
                        <Link to={url}>
                            {breadcrumbNameMap[url]}
                        </Link>
                    </Breadcrumb.Item>
                );
            })
        })
    }

    componentDidMount() {
        this.getPath();
    }

    componentWillReceiveProps() {
        this.getPath();
    }

    render() {
        console.log('this.state.extraBreadcrumbItems', this.state.extraBreadcrumbItems)
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                {this.state.extraBreadcrumbItems}
            </Breadcrumb>
        )
    }
} 

export default BaseBreadcrumb;
