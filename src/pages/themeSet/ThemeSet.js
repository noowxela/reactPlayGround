import React from 'react';

import { PageHeaderDiv } from '../../components/general';
import { Row, Col, Layout, Anchor, FloatButton  } from 'antd';

import Preview from './Preview';

const { Link } = Anchor;

export default function ThemeSetPage() {

  
  const components = [
    'Color',
    'Message',
    'Notification',
    'Button',
    'Step',
    'Typography',
    'Timeline',
  ];

  return (
    <div className="dashboard-content-layout">
      <PageHeaderDiv title='ThemeSet'/>
      <div className="management-content">
        <Layout style={{ background: 'transparent' }}>
          {/* <Layout.Header /> */}
          <Layout.Content style={{ padding: '40px 32px' }}>
            <Row
              gutter={24}
            >
              <Col xs={4}>
                <Anchor>
                  {
                    components.map(
                      (name) => <Link href={`#${name}`} title={name} />
                    )
                  }
                </Anchor>
              </Col>
              <Col xs={16}>
                <div className="theme-edit">
                  <Preview />
                </div>
              </Col>
              <Col xs={4}>
                {/* <ThemeSelect /> */}
              </Col>
            </Row>
            <FloatButton.BackTop type="default" />
          </Layout.Content>
        </Layout>
      </div>
    </div>
  );
}
