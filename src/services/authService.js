import { apiClient } from "../utils/apiClient.js";
import dotenv from "dotenv";
dotenv.config();

let cachedToken = null;

export const getAuthToken = async () => {
  if (cachedToken) return cachedToken;

  const payload = {
    username: process.env.ROUTE_MOBILE_USERNAME,
    password: process.env.ROUTE_MOBILE_PASSWORD,
  };

  const response = await apiClient.post("/auth/v1/login", payload);
  cachedToken = response.data.JWTAUTH;

  return cachedToken;
};

export default getAuthToken;       