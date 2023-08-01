import React from 'react';
import { notification, Button, Row, Col } from 'antd';
import PreviewWrapper from '../PreviewWrapper';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  });
};

const TimelinePreview = ({ size, disabled }) => (
  <PreviewWrapper id="Notification" title="Notification">
      <Row>
        <Col>
          <Button size={size} disabled={disabled} onClick={() => openNotificationWithIcon('success')}>success</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled} onClick={() => openNotificationWithIcon('info')}>info</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled} onClick={() => openNotificationWithIcon('warning')}>warning</Button>
        </Col>
        <Col>
          <Button size={size} disabled={disabled} onClick={() => openNotificationWithIcon('error')}>error</Button>
        </Col>
      </Row>
  </PreviewWrapper>
);

export default TimelinePreview;