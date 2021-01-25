const mongoose = require('mongoose');
const Schema = require('mongoose');

const SellSchema = new mongoose.Schema({
    id_seller: {type:Schema.Types.ObjectId, ref:'User'},
    id_product: {type:Schema.Types.ObjectId, ref:'Products'},
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Sell', SellSchema);