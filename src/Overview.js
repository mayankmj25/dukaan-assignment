import React from 'react';
import './Overview.css'; // Make sure to create an Overview.css file for styles

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <div id='header'>Overview</div>
        <div className="lastmonth">
          <div className="lastmonthtext">Last Month</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"/>
</svg>
        </div>
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
