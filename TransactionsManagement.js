import React, { useState, useEffect } from 'react';
import '../App.css';

function TransactionsManagement() {
    const [transactions, setTransactions] = useState([]);
    const [formData, setFormData] = useState({
        salespersonId: '',
        amount: '',
        paymentMethod: ''
    });

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const response = await fetch('http://localhost:5000/api/transactions');
        const data = await response.json();
        setTransactions(data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/transactions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        fetchTransactions(); // Refresh the list of transactions
        console.log(data);
    };

    return (
        <div className="form-container">
            <h2>Manage Transactions</h2>
            <form onSubmit={handleSubmit}>
                <label>Salesperson ID</label>
                <input type="text" name="salespersonId" value={formData.salespersonId} onChange={handleChange} placeholder="Salesperson ID" required />
                <label>Amount</label>
                <input type="text" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
                <label>Payment Method</label>
                <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} placeholder="Payment Method" required />
                <button type="submit">Add Transaction</button>
            </form>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <span>{transaction.amount} - {transaction.paymentMethod}</span>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionsManagement;
