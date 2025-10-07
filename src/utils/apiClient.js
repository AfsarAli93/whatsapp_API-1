import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const apiClient = axios.create({
  baseURL: process.env.ROUTE_MOBILE_BASE_URL,
});

