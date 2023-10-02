const http = require('http');

const host = 'localhost';
const port = 8000;

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Lavar el coche', completed: true },
  { id: 3, description: 'Estudiar para el examen', completed: false },
];

const requestListener = (req, res) => {
  if (req.method === 'GET' && req.url === '/tasks') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end('Página no encontrada');
  }
};

const server = http.createServer(requestListener);

server.listen(port, host,);
