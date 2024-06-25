const { Pool } = require('pg');
const pool = new Pool();

class Transaction {
    static async addTransaction(data) {
        const { rows } = await pool.query(
            'INSERT INTO transactions (salesperson_id, amount, payment_method) VALUES ($1, $2, $3) RETURNING *',
            [data.salespersonId, data.amount, data.paymentMethod]
        );
        return rows[0];
    }
    // Additional methods for retrieving transactions
}

module.exports = Transaction;
