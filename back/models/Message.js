const mongoose = require('mongoose');
const Schema =require('mongoose');

const MessageSchema = new mongoose.Schema({
    // transmitter:{type:Schema.Types.ObjectId, ref:'User'},
    // receiver:{type:Schema.Types.ObjectId, ref:'User'},
    // id_product: {type:Schema.Types.ObjectId, ref:'Products'},
    // text:String,
    // createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Message', MessageSchema);