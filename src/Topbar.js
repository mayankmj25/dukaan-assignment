import React from 'react';
import './Topbar.css'; // Assuming you have a separate CSS file for styles

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-section">
        <div className="topbar-link">Payments</div>
        <div className="topbar-link">How it works</div>
      </div>
      <div className="topbar-section">
        {/* Placeholder for search bar */}
        <input type="text" placeholder="Search features, tutorials, etc." className="topbar-search" />
        {/* Placeholder for icons */}
        <div className="topbar-icons">Icons</div>
      </div>
    </div>
  );
};

export default TopBar;
