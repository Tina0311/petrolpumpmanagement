const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');
const auth = require('../middleware/auth');

// Route to register a new owner
router.post('/register', ownerController.registerOwner);

// Route to login an owner
router.post('/login', ownerController.loginOwner);

// Additional owner-related routes can be added here

module.exports = router;
