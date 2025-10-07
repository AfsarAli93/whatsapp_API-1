import express from "express";
import { sendMessage } from "../controllers/messageController.js";

const router = express.Rogiututer();

router.post("/send", sendMessage);

export default router;
