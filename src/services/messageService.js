import { apiClient } from "../utils/apiClient.js";
import { getAuthToken } from "./authService.js";

export const sendWhatsAppMessage = async (to, text) => {
  const token = await getAuthToken();

  const payload = {
    from: "YourWhatsAppNumber", // Client given number
    to,
    type: "text",
    text: { body: text },
  };

  const response = await apiClient.post("/wba/v1/messages", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
