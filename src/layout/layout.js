import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Ant Design
import { Layout, Menu } from 'antd';
import {
  LogoutOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

import logo from '../logo.svg';
// import logo from '../assets/images/logo.svg';
import { getUser } from '../utils/AuthService';
import { useAuth } from '../hooks/useAuth';

const { Content, Sider } = Layout;

export default function LayoutPage() {
  const { logout } = useAuth();

  const user = getUser();
  
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    logout();
  };

  useEffect(() => {
    setSidebarWidth(collapsed ? 80 : 250);
  }, [collapsed]);

  
  const defaultAll = [
    {
      key: '/logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ]
  
  const AdminMenuItems = [
    {
      key: '/',
      label: (
        <NavLink to="/">
          Dashboard
        </NavLink>
      ),
      icon: <LineChartOutlined />,
    },
    ...defaultAll
  ];
  
  const Admin002MenuItems = [
    {
      key: '/',
      label: (
        <NavLink to="/">
          Dashboard
        </NavLink>
      ),
      icon: <LineChartOutlined />,
    },
    ...defaultAll
  ];
  
  const Admin003MenuItems = [
    {
      key: '/',
      label: (
        <NavLink to="/">
          DashboardClinic
        </NavLink>
      ),
      icon: <LineChartOutlined />,
    },
    ...defaultAll
  ];

  const renderRoleMenuNew = () => {
      switch (user.role.type || null) {
        case 'admin': case 'admin001':
          return AdminMenuItems;
        case 'admin002':
          return Admin002MenuItems;
        case 'admin003': case 'admin004':
          return Admin003MenuItems;
        default:
          return defaultAll;
      }
  }

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className="menu-layout"
          width={sidebarWidth}
          collapsible
          collapsed={collapsed}
          onCollapse={handleCollapse}>
          <div>
            <img className="logo" src={logo} alt="logo" style={{ width: sidebarWidth }} />
          </div>
          <Menu
            mode="inline"
            items={renderRoleMenuNew()}
          />
        </Sider>
        <Layout>
          <Content className="content-layout">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}