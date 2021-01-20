const express = require('express');
const CarsController = require('../controllers/carsController');
const router = express.Router();

router.post('/new', CarsController.newArticles);
router.get('/getcars', CarsController.getCars);
router.put('/update/:id', CarsController.updateCars);
router.delete('/delete/:id', CarsController.deleteCars);

module.exports = router;