import React from 'react';
  
import {
  LoadingOutlined,
} from '@ant-design/icons';
  
const PageHeaderDiv = (props) => <div className="breadcrumb-list-alex"> {props.title} </div>;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 30,
    }}
    spin
  />
);

const addLabel = (name) => (
  <div style={{marginLeft: "2px", width: "300px", color:"gray"}}>
    {name}
  </div>
)

export {
    PageHeaderDiv,
    antIcon,
    addLabel,
}