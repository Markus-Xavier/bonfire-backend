const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { checkJwt } = require('./src/middlewares/0auth2-jwt-bearer/jwtBearer');

const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

const port = 4000;

io.use((socket, next) => {
  const token = socket.handshake.auth.token
  console.log(token);
  next();
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});