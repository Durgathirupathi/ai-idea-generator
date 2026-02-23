require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const generateIdea = require('./api/generateIdea');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// Routes
app.post('/api/generate', generateIdea);

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'IdeaForge AI API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
