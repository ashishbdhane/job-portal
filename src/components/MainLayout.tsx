import React, { useState } from 'react';
import classes from './MainLayout.module.css';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CommentOutlined,
  UserOutlined,
  NotificationTwoTone,
  SearchOutlined,
  LockFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Input, Tooltip, FloatButton } from 'antd';
import { Link, Outlet, useLocation} from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  console.log(location);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <img src={require('../assets/Job-portal-logo.jpg')} alt="logo" className={classes.logo}/> */}
        <div className={classes.search}>
          {collapsed ? (
            <Tooltip title="search">
              <Button type="primary" shape="circle" onClick={() => {setCollapsed(false)}}  icon={<SearchOutlined />} />
            </Tooltip>
          ) : (
            <Search placeholder="Search" ref={(input) => {input && input.focus() }} enterButton  />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onSelect={console.log}
        >
          <Menu.Item key={'/profile'} icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key={'/opportunities'} icon={<NotificationTwoTone />}>
            <Link to="/opportunities">Opportunites</Link>
          </Menu.Item>
          <Menu.Item key={'/discuss'} icon={<CommentOutlined />}>
            <Link to="/discuss">Discuss</Link>
          </Menu.Item>
          <Menu.Item key={'/admin'} icon={<LockFilled />}>
            <Link to="/admin">Admin</Link>
          </Menu.Item>
          {/* items={[
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '/opportunities',
              icon: <NotificationTwoTone />,
              label: 'Opportunities',
            },
            {
              key: '/details',
              icon: <ToolOutlined />,
              label: 'Details',
            },
            {
              key: '/admin',
              icon: <LockFilled />,
              label: 'Admin',
            },
          ]} */}
        </Menu>
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
          <img
            src={require('../assets/Job-portal-logo.jpg')}
            alt="logo"
            className={classes.logo}
          />
          <h2>Job Portal</h2>
          <Link to={'login'}>
            <Button type="primary">Login</Button>
          </Link>
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
          <FloatButton.BackTop />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
