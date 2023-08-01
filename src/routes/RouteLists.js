import React, { useState, useEffect } from 'react';
import { Route, Navigate, NavLink, Outlet } from 'react-router-dom';

import { Layout, Menu, Row } from 'antd';
import {
  LogoutOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

import logo from '../logo.svg';
// import logo from '../assets/images/logo.svg';
import { useAuth } from '../hooks/useAuth';

import DashboardPage from '../pages/dashboard/Dashboard';
import FoodLookUpPage from '../pages/foodLookUp/FoodLookUp';
import ThemeSetPage from '../pages/themeSet/ThemeSet';

import NotFoundPage from './404';

const { Content, Sider } = Layout;

export default function RouteList() {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  useEffect(() => {
    setSidebarWidth(collapsed ? 80 : 250);
  }, [collapsed]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    logout();
  };

  // TODO maybe can use usememo to set the document title
  if (user) {
    switch (user.role.type) {
      case 'admin':
        document.title = 'Dashboard';
        break;
      case 'admin002':
        document.title = 'Dashboard';
        break;
      case 'admin003':
        document.title = 'Dashboard';
        break;
      default:
        document.title = 'Dashboard';
    }
  } else {
    document.title = 'Dashboard';
  }

  const commonRoutes = () => (
    <>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route key="/dashboard" path="/dashboard" element={<DashboardPage />} />
      <Route path="/not-found" element={NotFoundPage()} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </>
  );
  // TODO need to find a way to generate route depend on menuItem object
  const handleAdminRoutes = (role) => (
    <Route path="/" element={<AppLayout />}>
      {commonRoutes()}
      <Route key="/foodLoopUp" path="/foodLoopUp" element={<FoodLookUpPage />} />
      <Route key="/themeSet" path="/themeSet" element={<ThemeSetPage />} />
    </Route>
  );

  const handleAdmin002Routes = () => (
    <Route path="/" element={<AppLayout />}>
      {commonRoutes()}
    </Route>
  );

  const handleAdmin003Routes = () => (
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Navigate to="/dashboardClinic" />} />
      <Route key="/dashboardClinic" path="/dashboardClinic" element={<DashboardPage />} />
      {commonRoutes()}
    </Route>
  );

  const handleNoRole = () => (
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Navigate to="/not-found" />} />
      <Route path="/not-found" element={NotFoundPage()} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Route>
  );

  
  const defaultAll = [
    {
      key: '/logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ]
    
  const menuItem = {
    admin: [
      {
        key: '/',
        label: (
          <NavLink to="/">
            Dashboard
          </NavLink>
        ),
        icon: <LineChartOutlined />,
      },
      {
        key: '/foodLoopUp',
        label: (
          <NavLink to="/foodLoopUp">
            FoodLoopUp
          </NavLink>
        ),
        icon: <LineChartOutlined />,
      },
      {
        key: '/themeSet',
        label: (
          <NavLink to="/themeSet">
            ThemeSet
          </NavLink>
        ),
        icon: <LineChartOutlined />,
      },
      ...defaultAll
    ],
    admin002: [
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
    ], // No extra menu items for admin002
    admin003: [
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
    ], // No extra menu items for admin003
  };

  const renderRoleMenuNew = () => {
      switch (user.role.type || null) {
        case 'admin': case 'admin001':
          return menuItem['admin'];
        case 'admin002':
          return menuItem['admin002'];
        case 'admin003': case 'admin004':
          return menuItem['admin003'];
        default:
          return defaultAll;
      }
  }

  function AppLayout() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            // className="menu-layout"
            width={sidebarWidth}
            collapsible
            collapsed={collapsed}
            onCollapse={handleCollapse}
          >
            <Row align={"middle"}>
              <img className="logo" src={logo} alt="logo" style={{ width: sidebarWidth }} />
            </Row>
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

  const handleRolesRoutes = (roles) => {
    console.log("roles : ", roles)
    switch (roles) {
      case 'admin':
      case 'admin001':
        return handleAdminRoutes(roles);
      case 'admin002':
        return handleAdmin002Routes();
      case 'admin003':
      case 'admin004':
        return handleAdmin003Routes();
      default:
        return handleNoRole();
    }
  };

  return handleRolesRoutes(user ? user.role.type : null);
}
