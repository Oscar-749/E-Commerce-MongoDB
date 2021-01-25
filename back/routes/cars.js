const express = require('express');
const router = express.Router();
const CarsController = require('../controllers/productsController');
const auth = require('../middleware/auth');

router.post('/', auth, CarsController.newProducts);
router.get('/', CarsController.getProducts);
router.put('/:id', auth, CarsController.updateProducts);
router.delete('/:id', auth, CarsController.deleteProducts);

module.exports = router;