const mongoose = require('mongoose');
const Schema =require('mongoose');

const MessageSchema = new mongoose.Schema({
    transmitter:{type:Schema.Types.ObjectId, ref:'User'},
    text:String,
    receiver:{type:Schema.Types.ObjectId, ref:'User'},
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Message', MessageSchema);