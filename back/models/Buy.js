const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuySchema = new mongoose.Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Buy', BuySchema);