import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Page1 = () => {
  return (
    <div>
      <Header />
      <Menu />
      <h1>Página 2</h1>
      <p>Contenido de la página 2.</p>
      <Footer />
    </div>
  );
};

export default Page1;