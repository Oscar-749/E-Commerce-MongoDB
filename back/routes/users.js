const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/all', UserController.getAll);
router.get('/email/:email', UserController.getByEmail);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;