const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/productsController');
const auth = require('../middleware/auth');

router.post('/', auth, ProductsController.newProducts);
//===GET===//
router.get('/', ProductsController.getProducts);
router.get('getId/:id', ProductsController.getById);
router.get('/filter', ProductsController.getFilter);

router.put('/:id', auth, ProductsController.updateProducts);
router.delete('/:id', auth, ProductsController.deleteProducts);


module.exports = router;