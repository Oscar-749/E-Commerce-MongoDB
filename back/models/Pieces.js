const mongoose = require('mongoose');

const PiecesSchema = new mongoose.Schema({
    name: String,
    img:String,
    price:String,
    text:String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Pieces', PiecesSchema);