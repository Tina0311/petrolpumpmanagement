const { Pool } = require('pg');
const pool = new Pool();

class PetrolPump {
    static async addPump(data) {
        const { rows } = await pool.query(
            'INSERT INTO petrol_pumps (owner_id, name, location, operating_hours) VALUES ($1, $2, $3, $4) RETURNING *',
            [data.ownerId, data.name, data.location, data.operatingHours]
        );
        return rows[0];
    }
    // Add methods for retrieving, updating, and deleting pumps as needed
}

module.exports = PetrolPump;
