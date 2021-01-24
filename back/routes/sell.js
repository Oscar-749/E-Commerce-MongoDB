const express = require('express');
const router = express.Router();
const SellController = require('../controllers/sellController');

router.post('/newsell', SellController.newSell);
router.post('/allsell', SellController.getSell);

module.exports = router;