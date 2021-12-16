import React from 'react'
import {Layout, Menu} from 'antd';
import {
    UploadOutlined, UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import {renderRoutes} from "react-router-config";
import routes from './config';
import Home from './../page/home';
import MessageBox from './../page/messageBox';
import TagsInput from './../page/tagsInput';
import Loginpage from './../page/loginPage/LoginPage';

import './index.css'
import {
    HashRouter as Router,
    Switch,
    NavLink,
    BrowserRouter,
    Link,
    Route,
} from "react-router-dom";

const {Footer, Sider, Header, Content} = Layout;
const {Item, SubMenu} = Menu

class RouterApp extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    //递归生成菜单
    menuList = function deep(item) {
        if (item && item.length > 0) {
            // 循环路由
            return item.map((childItem, idx) => {
                if (childItem.routes && childItem.routes.length > 0) {
                    console.log(1)
                    return (<SubMenu key={childItem.resourceKey} icon={childItem.icon} title={childItem.resourceName}>
                        {/* 递归继续循环子项 */}
                        {deep(childItem.routes)}
                    </SubMenu>)
                }
                console.log(2)
                return (<Item key={childItem.resourceKey} icon={childItem.icon}>
                    <Link to={childItem.path}>{childItem.resourceName}</Link>
                </Item>)
            });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Loginpage/>
                        </Route>
                        <Layout className="site-layout-box">
                            <Sider
                                trigger={null} collapsible collapsed={this.state.collapsed}>
                                <div className="logo"/>
                                1
                                {routes.map((item) => {
                                    <div>item.resourceName</div>
                                })}
                                <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
                                    {/* {routes.map((item) => {
                                if (!item.isMenu) {
                                    return (<Menu.Item key={item.resourceKey} icon={item.icon}>
                                        <Link to={item.path}>{item.resourceName}</Link>
                                    </Menu.Item>)
                                }
                            })} */}
                                    {this.menuList(routes)}
                                    {console.log(this.menuList(routes))}
                                </Menu>
                            </Sider>
                            <Layout>
                                <Header className="site-layout-background" style={{padding: 0}}>
                                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                        className: 'trigger',
                                        onClick: this.toggle,
                                    })}
                                </Header>
                                <Content style={{margin: '24px 16px 0'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        {/* react router */}
                                        {/* <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/message">
                                    <MessageBox />
                                </Route>
                                <Route path="/tagsInput">
                                    <TagsInput />
                                </Route>
                            </Switch> */}
                                        {/* react-router-config 简化后 */}
                                        <Router>
                                            {renderRoutes(routes)}
                                        </Router>
                                    </div>
                                </Content>
                                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                            </Layout>
                        </Layout>
                    </Switch>
                </Router></BrowserRouter>)
    }
}

export default RouterApp;
