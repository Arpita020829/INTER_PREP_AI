const express = require('express');
const router = express.Router();

// @route  GET /api/health
// @desc   Health check endpoint
// @access Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server running successfully',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

module.exports = router;
