import React from 'react';
import { Typography, Row } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';

const { Title, Paragraph } = Typography;

const TypographyPreview = () => (
  <PreviewWrapper id="Typography" title="Typography">
    <Row><Title>h1. Ant Design</Title></Row>
    <Row><Title level={2}>h2. Ant Design</Title></Row>
    <Row><Title level={3}>h3. Ant Design</Title></Row>
    <Row><Title level={4}>h4. Ant Design</Title></Row>
    <Row>
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
        a design language for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team.
      </Paragraph>
    </Row>
    <Row>
      <p className="text-secondary">
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
        a design language for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team.
      </p>
    </Row>
    <Row>
      <code>
        function hello () { }
      </code>
    </Row>
  </PreviewWrapper>
);

export default TypographyPreview;