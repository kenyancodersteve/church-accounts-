const express = require('express');
const router = express.Router();

const { tres } = require('../control/fireauthT');

// Middleware

// Define route handler
router.get('/vieww', tres);

module.exports = router;
