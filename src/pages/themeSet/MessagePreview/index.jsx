import React from 'react';
import { message, Button, Row, Col } from 'antd';
import PreviewWrapper from '../PreviewWrapper';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const info = () => {
  message.info('This is an info message');
};

const warning = () => {
  message.warning('This is a warning message');
};

const TimelinePreview = ({ size, disabled }) => (
  <PreviewWrapper id="Message" title="Message">
      <Row>
        <Col>
          <Button size={size} disabled={disabled} onClick={success}>success</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled} onClick={info}>info</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled} onClick={warning}>warning</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled} onClick={error}>error</Button>
        </Col>
      </Row>
  </PreviewWrapper>
);

export default TimelinePreview;