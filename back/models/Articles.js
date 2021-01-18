const {Schema, model} = require('mongoose');

const ArticleSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    img:String,
    price:String,
    text:String,
    createdAt: {type: Date, default: new Date()}
})

module.exports = model('Articles', ArticleSchema);