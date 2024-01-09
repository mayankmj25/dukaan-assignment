import React from 'react';
import './Overview.css'; // Make sure to create an Overview.css file for styles

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <span>Overview</span>
        <button className="overview-time-filter">Last Month ▼</button>
      </div>
      <div className="overview-content">
        <div className="overview-item">
          <span className="overview-title">Online orders</span>
          <span className="overview-value">231</span>
        </div>
        <div className="overview-item">
          <span className="overview-title">Amount received</span>
          <span className="overview-value">₹23,92,312.19</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
