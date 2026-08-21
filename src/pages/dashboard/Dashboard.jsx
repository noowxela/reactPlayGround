import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

export default function DashboardPage() {
  return (
    <Layout style={{ background: "transparent", minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        Dashboard
      </Header>
      <Content style={{ padding: "40px 32px" }}></Content>
    </Layout>
  );
}
