// File: controllers/ownerController.js
const Owner = require('../models/Owner');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerOwner = async (req, res) => {
    const { fullName, email, phone, password, businessName, businessAddress, taxId } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newOwner = await Owner.create({ fullName, email, phone, password: hashedPassword, businessName, businessAddress, taxId });
        res.status(201).json(newOwner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginOwner = async (req, res) => {
    const { email, password } = req.body;
    try {
        const owner = await Owner.findByEmail(email);
        if (!owner) return res.status(404).json({ message: "Owner not found" });
        const isMatch = await bcrypt.compare(password, owner.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: owner.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
