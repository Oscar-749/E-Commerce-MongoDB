const express = require('express');
const router = express.Router();
const CarsController = require('../controllers/carsController');
const auth = require('../middleware/auth');

router.post('/', auth, CarsController.newArticles);
router.get('/', CarsController.getCars);
router.put('/:id', auth, CarsController.updateCars);
router.delete('/:id', auth, CarsController.deleteCars);

module.exports = router;