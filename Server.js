// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'grusolutions'
});

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Consulta SQL para verificar las credenciales
  const query = `SELECT * FROM usuario WHERE correo = ? AND contrasena = ?`;

  connection.query(query, [email, password], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      if (results.length > 0) {

        res.json({ success: true, user: results[0] });
      } else {
        // Credenciales inválidas
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    }
  });
});

// Endpoint para obtener los datos del usuario
app.get('/perfil/:idUsuario', (req, res) => {
  const idUsuario = req.params.idUsuario;

  // Consulta SQL para obtener los datos del usuario por su ID
  const query = `SELECT * FROM usuario WHERE idUsuario = ?`;

  connection.query(query, [idUsuario], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      if (results.length > 0) {
        res.json({ success: true, user: results[0] });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    }
  });
});

app.post('/registro', (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, correo, contrasena, turno, tipo, hrsTrabajadas } = req.body;

  console.log('Datos recibidos para registro:', req.body); // Agrega mensaje de registro

  // Consulta SQL para insertar un nuevo usuario en la base de datos
  const query = `INSERT INTO usuario (nombre, apellidoPaterno, apellidoMaterno, correo, contrasena, turno, tipo, hrsTrabajadas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [nombre, apellidoPaterno, apellidoMaterno, correo, contrasena, turno, tipo, hrsTrabajadas], (error, results) => {
    if (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor al registrar usuario' });
    } else {
      console.log('Usuario registrado exitosamente:', results); // Agrega mensaje de registro
      res.json({ success: true, message: 'Usuario registrado exitosamente' });
    }
  });
});

// Puerto en el que escucha el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
