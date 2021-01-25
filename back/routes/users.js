const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
//router.post('/comprar', UserController.);
//router.get('/:id/cars/buyed', UserController.);
//router.get('/:id/cars/selled', UserController.);
router.get('/', UserController.getAll);
router.get('/:email', UserController.getByEmail);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;