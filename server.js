const express = require('express');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const generateIdea = require('./api/generateIdea');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// Routes
// Mapped to match the frontend request on Vercel
app.post('/api/generate', generateIdea);

// Health check
app.get('/api', (req, res) => {
    res.json({ status: 'IdeaForge AI API is running on Vercel' });
});

// IMPORTANT: Do NOT use app.listen() for Vercel deployment.
// Export the Express application instead.
module.exports = app;
