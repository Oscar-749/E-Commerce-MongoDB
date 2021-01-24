const mongoose = require('mongoose');
//const Schema =require('mongoose');

const CarsSchema = new mongoose.Schema({
    //id_user:{type:Schema.Types.ObjectId, ref:'User'},
    name: String,
    img:String,
    price:String,
    text:String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Cars',CarsSchema);