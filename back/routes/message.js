const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');
const auth =require('../middleware/auth');

// router.post('/', auth, MessageController.newMessage);

module.exports = router;