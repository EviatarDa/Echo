import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>Instruments</li>
        <li style={styles.navItem}>Recorder</li>
        <li style={styles.navItem}>My Music</li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Navbar;