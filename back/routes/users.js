const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.get('/:email', UserController.getByEmail);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

//===RUTAS DE REGISTRO DE COMPRAS Y VENTAS===//
router.post('/compra', UserController.Buy);
router.post('/venta', UserController.Sell);

module.exports = router;