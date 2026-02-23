// Vercel auto-detects files in the /api folder as serverless functions.
// We import our Express app and export it here so Vercel can handle the routing natively.
const app = require('../server');

module.exports = app;
