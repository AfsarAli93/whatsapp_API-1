import { sendWhatsAppMessage } from "../services/messageService.js";

export const sendMessage = async (req, res) => {
  try {
    const { to, message } = req.body;
    const result = await sendWhatsAppMessage(to, message);
    res.json({ status: "Message sent", response: result });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    res.status(500).json({ error: "Failed to send message", details: error.message });
  }
};
