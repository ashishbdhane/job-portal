import React, { useState } from 'react';
import classes from './MainLayout.module.css';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ToolOutlined,
  UserOutlined,
  NotificationTwoTone,
  SearchOutlined,
  LockFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Input, Tooltip, FloatButton } from 'antd';
import Opportunities from './Opportunities/Opportunities';
import { Outlet } from 'react-router-dom';





const { Header, Sider, Content } = Layout;
const { Search } = Input;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <img src={require('../assets/Job-portal-logo.jpg')} alt="logo" className={classes.logo}/> */}
        <div className={classes.search}>
          {collapsed ? (
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
          ) : (
            <Search placeholder="Search" enterButton />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          onSelect={console.log}
          items={[
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '2',
              icon: <NotificationTwoTone />,
              label: 'Opportunities',
            },
            {
              key: '3',
              icon: <ToolOutlined />,
              label: 'Details',
            },
            {
              key: '4',

              icon: <LockFilled />,
              label: 'Admin',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className={classes.header}
        >
          <div>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <img src={require('../assets/Job-portal-logo.jpg')} alt="logo" className={classes.logo}/>
          <h2>Job Portal</h2>
          <Button type="primary">Login</Button>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
          <FloatButton.BackTop />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
