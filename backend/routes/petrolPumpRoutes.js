const express = require('express');
const router = express.Router();
const { addPump } = require('../controllers/petrolPumpController');
const auth = require('../middleware/auth');

router.post('/', auth, addPump);

module.exports = router;
