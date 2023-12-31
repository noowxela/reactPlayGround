// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { PATHS } from "./constants/routes";
import RouteList from "./routes/RouteLists";
import { ConfigProvider, theme } from "antd";
import enUSIntl from "antd/lib/locale/en_US";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { darkMode, themeColor } = useAuth();

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);
  return (
    <ConfigProvider
      locale={enUSIntl}
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: themeColor,
        },
      }}
    >
      <Routes className="App">
        {/** Protected Routes */}
        {/** Wrap all Route under ProtectedRoutes element */}
        <Route path="/" element={<PrivateRoute />}>
          {RouteList()}
        </Route>

        {/** Public Routes */}
        {/** Wrap all Route under PublicRoutes element */}
        <Route path="login" element={<PublicRoute />}>
          <Route path={PATHS.login} element={<LoginPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
