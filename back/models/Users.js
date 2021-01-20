const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6    
    },
},{
    toJSON:{
        transform: function(doc, ret){
            delete ret.password //Borrar completamente la password
            return ret;
        },
        virtual: true
    }
});

module.exports = mongoose.model('User', UserSchema);