const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    name: String,
    img:String,
    price:String,
    text:String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = mongoose.model('Articles',ArticleSchema);