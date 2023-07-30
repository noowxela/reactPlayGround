import React from 'react';

import { PageHeaderDiv } from '../../components/general';

export default function DashboardPage() {
  return (
    <div className="dashboard-content-layout">
      <PageHeaderDiv title='Dashboard'/>
      <div className="management-content">
      </div>
    </div>
  );
}
