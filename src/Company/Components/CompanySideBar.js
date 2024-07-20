import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaQuestionCircle } from 'react-icons/fa';

// Define tab data
const tabsData = [
  { icon: FaHome, text: 'Home' },
  { icon: FaUser, text: 'Profile' },
  { icon: FaCog, text: 'Settings' },
];

const bottomTabsData = [
  { icon: FaSignOutAlt, text: 'Logout' },
  { icon: FaQuestionCircle, text: 'Help' },
];

const CompanySideBar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>Cartizen</div>
      <div style={styles.tabs}>
        {tabsData.map((tab, index) => (
          <div
            key={index}
            style={styles.tab}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {React.createElement(tab.icon, { style: styles.icon })}
            <span style={styles.tabText}>{tab.text}</span>
          </div>
        ))}
      </div>
      <div style={styles.bottomTabs}>
        {bottomTabsData.map((tab, index) => (
          <div
            key={index}
            style={styles.tab}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {React.createElement(tab.icon, { style: styles.icon })}
            <span style={styles.tabText}>{tab.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '18vw',
    height: '100vh',
    backgroundColor: '#0f1315',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    padding: '10px',
  },
  header: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  tabs: {
    flex: 1,
  },
  bottomTabs: {
    marginTop: 'auto',
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  icon: {
    marginRight: '10px',
  },
  tabText: {
    fontSize: '1em',
  },
};

// Hover effect functions
const handleMouseEnter = (e) => {
  e.currentTarget.style.backgroundColor = 'white';
  e.currentTarget.style.color = '#0f1315';
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.backgroundColor = 'transparent';
  e.currentTarget.style.color = 'white';
};

export default CompanySideBar;
