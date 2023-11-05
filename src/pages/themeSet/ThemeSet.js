import React from "react";
import { Row, Col, Layout, Anchor, FloatButton } from "antd";

import Preview from "./Preview";

const { Link } = Anchor;

export default function ThemeSetPage() {
  const components = [
    "Color",
    "Message",
    "Notification",
    "Button",
    "Step",
    "Typography",
    "Timeline",
  ];

  return (
    <Layout style={{ background: "transparent" }}>
      <Layout.Header
        style={{
          padding: 0,
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        ThemeSet
      </Layout.Header>
      <Layout.Content style={{ padding: "40px 32px" }}>
        <Row gutter={24}>
          <Col xs={4}>
            <Anchor>
              {components.map((name) => (
                <Link href={`#${name}`} title={name} />
              ))}
            </Anchor>
          </Col>
          <Col xs={16}>
            <div className="theme-edit">
              <Preview />
            </div>
          </Col>
          <Col xs={4}>{/* <ThemeSelect /> */}</Col>
        </Row>
        <FloatButton.BackTop type="default" />
      </Layout.Content>
    </Layout>
  );
}
