// archivo server.js
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Código de estado HTTP 200 OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, Mundo!\n');
});

// Escuchar en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});
