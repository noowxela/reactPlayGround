import React from 'react';
import { Route, Navigate } from 'react-router-dom';


import { useAuth } from '../hooks/useAuth';

import LayoutPage from '../layout/layout';

import DashboardPage from '../pages/dashboard/Dashboard';

import NotFoundPage from './404';

export default function RouteList() {
  const { user } = useAuth();
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

  const handleAdminRoutes = (role) => (
    <Route path="/" element={<LayoutPage />}>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route key="/dashboard" path="/dashboard" element={<DashboardPage />} />
      <Route path="/not-found" element={NotFoundPage()} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Route>
  );

  const handleAdmin002Routes = () => (
    <Route path="/" element={<LayoutPage />}>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route key="/dashboard" path="/dashboard" element={<DashboardPage />} />
      <Route path="/not-found" element={NotFoundPage()} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Route>
  );

  const handleAdmin003Routes = () => (
    <Route path="/" element={<LayoutPage />}>
      <Route path="/" element={<Navigate to="/dashboardClinic" />} />
      <Route key="/dashboardClinic" path="/dashboardClinic" element={<DashboardPage />} />
      <Route path="/not-found" element={NotFoundPage()} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Route>
  );

  const handleNoRole = () => (
    <Route path="/" element={<LayoutPage />}>
      <Route path="/not-found" element={NotFoundPage()} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Route>
  );

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
