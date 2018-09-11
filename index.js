const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send(public);
});

app.use(express.static(path.resolve(__dirname, 'public')));

server.on('listening', () => {
  console.log('Server is listening on port: 3000');
});

server.listen(3002);
