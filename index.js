const express = require('express');
const dotenv = require('dotenv');
const messageRoutes = require('./src/routes/messageRoutes');

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Register the routes
app.use('/api', messageRoutes);

app.get('/', (req, res) => {
    res.send('WhatsApp API Backend is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));