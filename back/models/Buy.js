const mongoose = require('mongoose');

const BuySchema = new mongoose.Schema({
    id_buyer: String,
    id_car: String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Buy', BuySchema);