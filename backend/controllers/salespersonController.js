const Salesperson = require('../models/Salesperson');

exports.addSalesperson = async (req, res) => {
    try {
        const salesperson = await Salesperson.addSalesperson(req.body);
        res.status(201).json(salesperson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllSalespersons = async (req, res) => {
    try {
        const salespersons = await Salesperson.getAllSalespersons();
        res.json(salespersons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSalespersonById = async (req, res) => {
    try {
        const salesperson = await Salesperson.getSalespersonById(req.params.id);
        if (!salesperson) {
            return res.status(404).json({ message: 'Salesperson not found' });
        }
        res.json(salesperson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSalesperson = async (req, res) => {
    try {
        const updatedSalesperson = await Salesperson.updateSalesperson(req.params.id, req.body);
        if (!updatedSalesperson) {
            return res.status(404).json({ message: 'Salesperson not found' });
        }
        res.json(updatedSalesperson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteSalesperson = async (req, res) => {
    try {
        await Salesperson.deleteSalesperson(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
