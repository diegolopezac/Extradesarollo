import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Page1 = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Estado para almacenar los datos enviados
  const [submittedData, setSubmittedData] = useState([]);

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar los datos del formulario a la lista de datos enviados
    setSubmittedData([...submittedData, formData]);
    // Limpiar el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Header />
      <Menu />
      <h1>Página 1</h1>
      <p>Contenido de la página 1.</p>

      {/* Formulario */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>

      {/* Tabla para mostrar los datos enviados */}
      {submittedData.length > 0 && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo electrónico</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Footer />
    </div>
  );
};

// Estilos para el formulario y la tabla
const styles = {
  form: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#333',
    borderRadius: '8px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#cc0000',
  },
  table: {
    width: '100%',
    margin: '20px 0',
    borderCollapse: 'collapse',
    backgroundColor: '#444',
    color: '#fff',
  },
  th: {
    backgroundColor: '#ff0000',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    border: '1px solid #555',
  },
};

export default Page1;