const PetrolPump = require('../models/PetrolPump');

exports.addPump = async (req, res) => {
    try {
        const pump = await PetrolPump.addPump(req.body);
        res.status(201).send(pump);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
