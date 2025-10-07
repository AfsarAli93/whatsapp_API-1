import express from "express";
import dotenv from "dotenv";
import messageRoutes from "./src/routes/messageRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public")); // 👈 Serve frontend

app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("✅ WhatsApp API Backend is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
