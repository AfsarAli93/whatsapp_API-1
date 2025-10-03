const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://whatsapp.rmlconnect.net/v1',
  headers: { 'Content-Type': 'application/json' },
});

module.exports = apiClient;
