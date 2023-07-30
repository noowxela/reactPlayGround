import React from 'react';

import { PageHeaderDiv } from '../../components/general';

export default function Dashboard() {
  return (
    <div className="dashboard-content-layout">
      <PageHeaderDiv title='Dashboard'/>
      <div className="management-content">
      </div>
    </div>
  );
}
