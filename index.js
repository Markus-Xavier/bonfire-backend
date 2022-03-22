const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const checkJwt = require('./src/middlewares/0auth2-jwt-bearer/jwtBearer');

const port = 4000;

app.use(cors());


app.get('/api/private', checkJwt, (request, response) => {
  response.json({
    message: 'This is working'
  });
});


server.listen(port, () => {
  console.log(`listening on ${port}`);
});