const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const auth =require('../middleware/auth');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/profile', auth, UserController.profile);
router.get('/', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.get('/:email', UserController.getByEmail);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

//===RUTAS DE REGISTRO DE COMPRAS Y VENTAS===//
router.post('/compra', UserController.Buy);
router.post('/venta', UserController.Sell);

module.exports = router;