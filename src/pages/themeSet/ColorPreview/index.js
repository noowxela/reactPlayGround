import React from 'react';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';
import './style.css';
import { theme, Row, Col, Divider } from 'antd';
const { useToken } = theme;

const ColorPreview = () => {

  const { token } = useToken();

  return(
    <PreviewWrapper id="Color" title="Color">
      <Divider orientation="left">sub-element align full</Divider>
      <Row justify="space-around">
        <Col className="color-item" style={{ backgroundColor: token.colorPrimary, color: token.colorTextLightSolid }}>
            <div className="name">@primary-color</div>
            <div className="value">全局主色</div>
        </Col>
        <Col className="color-item" style={{ backgroundColor: token.colorSuccess, color: token.colorTextLightSolid }}>
            <div className="name">@success-color</div>
            <div className="value">成功色</div>
        </Col>
        <Col className="color-item" style={{ backgroundColor: token.colorWarning, color: token.colorTextLightSolid }}>
            <div className="name">@warning-color</div>
            <div className="value">警告色</div>
        </Col>
        <Col className="color-item" style={{ backgroundColor: token.colorError, color: token.colorTextLightSolid }}>
            <div className="name">@error-color</div>
            <div className="value">错误色</div>
        </Col>
        <Col className="color-item" style={{ backgroundColor: token.colorInfo, color: token.colorTextLightSolid }}>
            <div className="name">@info-color</div>
            <div className="value">提示色</div>
        </Col>
      </Row>
    </PreviewWrapper>
  )
};

export default ColorPreview;