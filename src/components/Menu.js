import React from 'react';

const Menu = () => {
  return (
    <aside style={styles.menu}>
      <h3>Menú</h3>
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>
    </aside>
  );
};

const styles = {
  menu: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    width: '200px',
  }
};

export default Menu;