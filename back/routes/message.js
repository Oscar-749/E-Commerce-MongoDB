const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');
const auth =require('../middleware/auth');


module.exports = router;