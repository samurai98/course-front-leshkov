import React, {useState} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Layout, Breadcrumb} from 'antd'

import logo from './assets/images/code.png'
import AppMenu from './components/AppMenu'
import AppHeader from './components/AppHeader'
import {Route} from 'react-router-dom'
import Login from './components/Login'

const {Content, Footer, Sider} = Layout;


const App = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const logoStyle = collapsed ? 'logo-collapsed' : 'logo'

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed)
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className={"logo-wrapper"}>
                    <img src={logo} alt="logo" className={logoStyle}/>
                </div>
                <AppMenu/>
            </Sider>
            <Layout className="site-layout">
                <AppHeader/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Route exact path={'/login'} component={Login}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Инструментальные средства поддержки обучения программированию
                    ©2021 Created by Vladislav Leshkov</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
