import React from 'react';
import { DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Row, Col } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';

const ButtonPreview = ({ size, disabled }) => (
  <PreviewWrapper id="Button" title="Button">
    <div>
      <Row>
        <Col>
          <Button type="primary" size={size} disabled={disabled}>Primary</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled}>Normal</Button>
        </Col>
        <Col>
          <Button type="dashed" size={size} disabled={disabled}>Dashed</Button>
        </Col>
        <Col>
          <Button type="danger" size={size} disabled={disabled}>Danger</Button>
        </Col>
        <Col>
          <Button type="link" size={size} disabled={disabled}>Link</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary" ghost size={size} disabled={disabled}>Primary</Button>
        </Col>
        <Col>
          <Button ghost size={size} disabled={disabled}>Default</Button>
        </Col>
        <Col>
          <Button ghost type="dashed" size={size} disabled={disabled}>Dashed</Button>
        </Col>
        <Col>
          <Button ghost type="danger" size={size} disabled={disabled}>Danger</Button>
        </Col>
        <Col>
          <Button ghost type="link" size={size} disabled={disabled}>Link</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="primary" icon={<DownloadOutlined />} size={size} disabled={disabled} />
        </Col>
        <Col>
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} disabled={disabled} />
        </Col>
        <Col>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} disabled={disabled}>Download</Button>
        </Col>
        <Col>
          <Button type="primary" icon={<DownloadOutlined />} size={size} disabled={disabled}>Download</Button>
        </Col>
      </Row>
      <Row>
        <Button.Group size={size}>
          <Button type="primary" disabled={disabled}>
            <LeftOutlined />
            Backward
          </Button>
          <Button type="primary" disabled={disabled}>
            Forward
            <RightOutlined disabled={disabled} />
          </Button>
        </Button.Group>
      </Row>
    </div>
  </PreviewWrapper>
);

export default ButtonPreview;