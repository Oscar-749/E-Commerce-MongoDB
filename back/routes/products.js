const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/productsController');
const auth = require('../middleware/auth');

router.post('/', auth, ProductsController.newProducts);
router.get('/', ProductsController.getProducts);
router.get('/:id', ProductsController.getById);
router.put('/:id', ProductsController.updateProducts);
router.delete('/:id', auth, ProductsController.deleteProducts);

//===RUTAS DE FILTROS===//
router.get('/filter', ProductsController.getFilter);

module.exports = router;