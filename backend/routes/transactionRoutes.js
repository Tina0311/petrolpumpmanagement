const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth');

// Route to add a new transaction
router.post('/', auth, transactionController.addTransaction);

// Route to get all transactions for a specific salesperson
router.get('/:salespersonId', auth, transactionController.getTransactionsBySalesperson);

module.exports = router;
