const axios = require('axios');
require('dotenv').config();

let tokenCache = null;

async function getToken() {
  if (tokenCache) return tokenCache;

  const response = await axios.post(
    'https://apis.rmlconnect.net/auth/v1/login/',
    {
      username: process.env.ROUTE_USERNAME,
      password: process.env.ROUTE_PASSWORD,
    }
  );

  tokenCache = response.data.data.token;
  return tokenCache;
}

module.exports = { getToken };
    