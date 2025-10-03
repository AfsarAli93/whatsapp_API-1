const axios = require('axios');
const { getToken } = require('./authService');

async function sendMessageService(payload) {
  const token = await getToken();

  const response = await axios.post(
    'https://whatsapp.rmlconnect.net/v1/messages',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

module.exports = { sendMessageService };
