const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.addTransaction(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Error adding transaction: ' + error.message });
    }
};

exports.getTransactionsBySalesperson = async (req, res) => {
    const salespersonId = req.params.salespersonId;
    try {
        const transactions = await Transaction.getTransactionsBySalesperson(salespersonId);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions: ' + error.message });
    }
};
