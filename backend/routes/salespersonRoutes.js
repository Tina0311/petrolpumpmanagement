const express = require('express');
const router = express.Router();
const salespersonController = require('../controllers/salespersonController');
const auth = require('../middleware/auth');

router.post('/', auth, salespersonController.addSalesperson);
router.get('/', auth, salespersonController.getAllSalespersons);
router.get('/:id', auth, salespersonController.getSalespersonById);
router.put('/:id', auth, salespersonController.updateSalesperson);
router.delete('/:id', auth, salespersonController.deleteSalesperson);

module.exports = router;
