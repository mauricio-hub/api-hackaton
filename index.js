// Importamos Express y Axios
const express = require('express');
const axios = require('axios');
const app = express();
const port = 9000;

// Middleware para procesar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta para hacer POST a la API pública JSONPlaceholder
app.post('/api/create-post', async (req, res) => {
  const { title, body, userId } = req.body;

  try {
    // Hacemos una solicitud POST a la API pública
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId
    });

    // Enviamos la respuesta de la API pública al cliente
    res.status(201).json(response.data);
  } catch (error) {
    // En caso de error, devolvemos el error
    res.status(500).json({ message: 'Error al crear el post', error: error.message });
  }
});

// Ruta para obtener todos los posts de la API pública JSONPlaceholder
app.get('/api/posts', async (req, res) => {
  try {
    // Hacemos una solicitud GET a la API pública
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Enviamos la respuesta de la API pública al cliente
    res.status(200).json(response.data);
  } catch (error) {
    // En caso de error, devolvemos el error
    res.status(500).json({ message: 'Error al obtener los posts', error: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
