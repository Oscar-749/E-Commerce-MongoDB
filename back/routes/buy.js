const express = require('express');
const router = express.Router();
const BuyController =require('../controllers/buyController');

router.post('/newbuy', BuyController.newBuy);
router.get('/allbuy', BuyController.getBuy);

module.exports = router;