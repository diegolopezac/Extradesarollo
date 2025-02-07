import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>Mi Sitio Web</Link>
      <nav>
        <Link to="/page1" style={styles.navLink}>Página 1</Link>
        <Link to="/page2" style={styles.navLink}>Página 2</Link>
        <Link to="/page3" style={styles.navLink}>Página 3</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#ff0000',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
  }
};

export default Header;