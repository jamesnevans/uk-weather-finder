import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {children.map((child, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {children[activeTab]}
      </div>
    </div>
  );
};

export const TabPanel = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

export default Tabs;