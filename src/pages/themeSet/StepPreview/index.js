import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps,Row } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';

const { Step } = Steps;

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

const StepPreview = ({ size, disabled }) => (
  <PreviewWrapper id="Steps" title="Steps">
    <Row>
      <Steps current={1} size={size}>
        <Step title="Finished" description="This is a description." disabled={disabled} />
        <Step title="In Progress" description="This is a description." disabled={disabled} />
        <Step title="Waiting" description="This is a description." disabled={disabled} />
      </Steps>
    </Row>
    <Row>
      <Steps size={size}>
        <Step status="finish" title="Login" icon={<UserOutlined />} disabled={disabled} />
        <Step status="finish" title="Verification" icon={<SolutionOutlined />} disabled={disabled} />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} disabled={disabled} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} disabled={disabled} />
      </Steps>
    </Row>
    <Row>
      <Steps progressDot current={1} size={size}>
        <Step title="Finished" description="This is a description." disabled={disabled} />
        <Step title="In Progress" description="This is a description." disabled={disabled} />
        <Step title="Waiting" description="This is a description." disabled={disabled} />
      </Steps>
    </Row>
    <Row>
      <Steps type="navigation" style={stepStyle} size={size}>
        <Step status="finish" title="Step 1" disabled={disabled} />
        <Step status="process" title="Step 2" disabled={disabled} />
        <Step status="wait" title="Step 3" disabled={disabled} />
        <Step status="wait" title="Step 4" disabled={disabled} />
      </Steps>
    </Row>
    <Row>
      <Steps direction="vertical" current={1} size={size}>
        <Step title="Finished" description="This is a description." disabled={disabled} />
        <Step title="In Progress" description="This is a description." disabled={disabled} />
        <Step title="Waiting" description="This is a description." disabled={disabled} />
      </Steps>
    </Row>
  </PreviewWrapper>
);

export default StepPreview;