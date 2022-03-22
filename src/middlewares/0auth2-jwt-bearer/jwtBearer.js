const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'https://bonfire/api',
  issuerBaseURL: 'https://dev-c-6l4ag3.us.auth0.com/'
});

module.exports = checkJwt;