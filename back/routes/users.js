const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const auth =require('../middleware/auth');

//===POST===//
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/profile', auth, UserController.profile);
//===GET===///
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.get('/:email', UserController.getByEmail);

router.put('/:id', auth, UserController.update);
router.delete('/:id', auth, UserController.delete);

//===RUTAS DE REGISTRO DE COMPRAS Y VENTAS===//
// router.post('/compra', UserController.Buy);
// router.post('/venta', UserController.Sell);

module.exports = router;