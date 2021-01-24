const mongoose = require('mongoose');

const SellSchema = new mongoose.Schema({
    id_buyer: String,
    id_seller: String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Sell', SellSchema);