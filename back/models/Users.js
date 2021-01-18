const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
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
}

},{
    toJSON:{
        transform: function(doc, ret){
            delete ret.password //Borrar completamente la password
            return ret;
        },
        virtual: true
    }
});

UserSchema.pre('save', async function(next){
    try{
        const user = this;
        user.password = await bcrypt.hash(user.password, 9);
        next()
    }catch(error){
        console.log(error)
    }
})

module.exports = model('User', UserSchema);

// UserSchema.virtual('productos').get(function(){
//     const user = this;
//     return{
//         sold_items:
//         sale_items:
//         favorites:
//     }
// })
//const User = model('User', UserSchema);