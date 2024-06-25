const { Pool } = require('pg');
const pool = new Pool();

class Salesperson {
    static async addSalesperson(data) {
        const { rows } = await pool.query(
            'INSERT INTO salespersons (petrol_pump_id, name, email, phone) VALUES ($1, $2, $3, $4) RETURNING *',
            [data.petrolPumpId, data.name, data.email, data.phone]
        );
        return rows[0];
    }

    static async getAllSalespersons() {
        const { rows } = await pool.query('SELECT * FROM salespersons');
        return rows;
    }

    static async getSalespersonById(id) {
        const { rows } = await pool.query('SELECT * FROM salespersons WHERE id = $1', [id]);
        return rows[0];
    }

    static async updateSalesperson(id, data) {
        const { rows } = await pool.query(
            'UPDATE salespersons SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
            [data.name, data.email, data.phone, id]
        );
        return rows[0];
    }

    static async deleteSalesperson(id) {
        await pool.query('DELETE FROM salespersons WHERE id = $1', [id]);
    }
}

module.exports = Salesperson;
