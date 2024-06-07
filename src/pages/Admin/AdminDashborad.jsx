import React from 'react';
import StatFullTemplate from '../../components/StatisticsComp';
import Performance from '../../components/Performance';
import TwoLevelPieChart from '../../components/PieChart';

function AdminDashboard() {
  return (
        <div style={{marginLeft: '50px'}}>
            <h1 style={{ textAlign: 'center', margintop: '50px' }}>Wlecome Admin1</h1>
            <StatFullTemplate/>
            <h4 style={{ textAlign: 'center', margintop: '50px' }}>System performance</h4>
            <div style={{ display: 'flex'}}>
              <Performance />
              <TwoLevelPieChart />
            </div>
        </div>
  );
}

export default AdminDashboard;
