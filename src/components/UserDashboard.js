import React from 'react';
import TransactionList from './TransactionList';

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <TransactionList />
      {/* Add Budget Management and Financial Goal Setting components here if needed */}
    </div>
  );
};

export default UserDashboard;