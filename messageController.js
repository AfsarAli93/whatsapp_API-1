//const { sendMessage } = require('./messageController');
const { sendMessageService } = require('../services/messageService');

exports.sendMessage = async (req, res) => {
  try {
    const result = await sendMessageService(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
