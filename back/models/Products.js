const mongoose = require('mongoose');
const Schema =require('mongoose');

const ProductsSchema = new mongoose.Schema({
    id_user:{type:Schema.Types.ObjectId, ref:'User'},
    name: String,
    // img:String,
    price:String,
    text:String,
    product:String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Products',ProductsSchema);