import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  }
};

export default Footer;