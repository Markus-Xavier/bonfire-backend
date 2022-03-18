const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'http://bonfire/api',
  issuerBaseURL: 'http://localhost:3000'
});

module.exports = checkJwt;