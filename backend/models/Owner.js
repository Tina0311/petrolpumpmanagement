const { Pool } = require('pg');
const pool = new Pool();

class Owner {
    static async findByEmail(email) {
        const { rows } = await pool.query('SELECT * FROM owners WHERE email = $1', [email]);
        return rows[0];
    }

    static async create(data) {
        const { rows } = await pool.query(
            'INSERT INTO owners (full_name, email, phone, password, business_name, business_address, tax_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [data.fullName, data.email, data.phone, data.password, data.businessName, data.businessAddress, data.taxId]
        );
        return rows[0];
    }
}

module.exports = Owner;
