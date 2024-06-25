const express = require('express');
const dotenv = require('dotenv');
const cors = require('./middleware/cors');
const jsonParser = require('./middleware/json');
const db = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Importing Routes
const ownerRoutes = require('./routes/ownerRoutes');
const petrolPumpRoutes = require('./routes/petrolPumpRoutes');
const salespersonRoutes = require('./routes/salespersonRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

// Middlewares
app.use(cors);
app.use(jsonParser);

// Routes
app.use('/api/owners', ownerRoutes);
app.use('/api/pumps', petrolPumpRoutes);
app.use('/api/salespersons', salespersonRoutes);
app.use('/api/transactions', transactionRoutes);

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Welcome to the Petrol Pump Management System!');
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Verifying Database Connection
db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Server time:', res.rows);
  }
});
