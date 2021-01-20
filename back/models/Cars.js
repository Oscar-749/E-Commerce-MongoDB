const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    name: String,
    img:String,
    price:String,
    text:String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Cars',CarsSchema);