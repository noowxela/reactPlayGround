import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { PATHS } from "./constants/routes";
import RouteList from "./routes/RouteLists";
import { ConfigProvider, theme } from "antd";
import enUSIntl from "antd/locale/en_US";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { darkMode, themeColor } = useAuth();

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
