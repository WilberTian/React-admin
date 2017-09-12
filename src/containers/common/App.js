import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cookie from 'tiny-cookie';

import { Layout, Menu, Icon, message } from 'antd';

import LoadingScreenComponent from '../../components/LoadingScreenComponent';
import loginService from '../../services/loginService';

import './app.less';


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends PureComponent {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            collapsed: false,
            displayDetailLogo: false,
            userName: '',
            navStatus: this.props.route.navStatus
        };
    }

    async componentWillMount() {
        const userName = Cookie.get('userName');
        if (userName) {
            this.setState({
                loading: false,
                userName
            });
        } else {
            try {
                const result = await loginService.validateLogin();
                this.setState({
                    loading: false,
                    userName: result.data.userName
                });
            } catch (ex) {
                if (ex.message !== '') {
                    message.config({
                        duration: 10,
                    });
                    message.error(ex.message);
                }
            }
        }
    }

    _onCollapse(collapsed) {
        this.setState({
            collapsed,
            displayDetailLogo: !this.state.displayDetailLogo
        });
    }

    _onMenuItemSelect(item) {
        window.location.href = `/html/${item.key}.html`;
    }

    _handleLogout() {
        window.location.href = '/manage/logout';
    }

    render() {
        const { children } = this.props;
        const logo = require('../../images/logo.png');

        return (
            <div style={{ width: '100%', height: '100%' }}>
                { this.state.loading && <LoadingScreenComponent /> }
                { !this.state.loading && <Layout className="app-container">
                    <Sider
                      collapsible
                      collapsed={this.state.collapsed}
                      onCollapse={::this._onCollapse}
                    >
                        { !this.state.displayDetailLogo && <div className="brand">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <span className="brand-name">
                                React admin
                            </span>
                        </div> }
                        { this.state.displayDetailLogo && <div className="brand">
                            <img className="small-logo" src={logo} alt="small logo" />
                            <span className="small-brand-name">
                                Admin
                            </span>
                        </div> }
                        <Menu
                          theme="dark"
                          defaultSelectedKeys={[this.state.navStatus.sub]}
                          defaultOpenKeys={[this.state.navStatus.system]}
                          mode="inline"
                          onSelect={::this._onMenuItemSelect}
                        >
                            <SubMenu
                              key="componentsSystem"
                              title={<span><Icon type="appstore" /><span>组件系统</span></span>}
                            >
                                <Menu.Item key="components-example">常用组件示例</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="dashboard">
                                <Icon type="rocket" />
                                <span>Dashboard</span>
                            </Menu.Item>
                            <SubMenu
                              key="chartSystem"
                              title={<span><Icon type="area-chart" /><span>图表</span></span>}
                            >
                                <Menu.Item key="linechart">
                                    <Icon type="line-chart" />
                                    <span>linechart</span>
                                </Menu.Item>
                                <Menu.Item key="barchart">
                                    <Icon type="bar-chart" />
                                    <span>barchart</span>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <span className="login-user-info">
                                欢迎，{this.state.userName}
                            </span>
                            {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                            <span className="logout" onClick={::this._handleLogout}>退出</span>
                            {/* eslint-enable jsx-a11y/no-static-element-interactions */}
                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            { children }
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            ©Copyright 2017 React admin
                        </Footer>
                    </Layout>
                </Layout> }
            </div>
        );
    }

}

export default App;
