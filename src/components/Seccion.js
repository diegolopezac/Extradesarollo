import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seccion = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data.slice(0, 5)); // Solo mostramos los primeros 5 posts
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <section style={styles.section}>
      <h2>Últimos Posts</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#444',
    color: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: '10px',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  }
};

export default Seccion;