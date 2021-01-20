const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    // articles:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'Articles'
    //     }
    // ]
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


// UserSchema.pre('save', async function(next){
//     try{
//         const user = this;
//         user.password = await bcrypt.hash(user.password, 6);
//         next()
//     }catch(error){
//         console.log(error)
//     }
// })

// UserSchema.virtual('productos').get(function(){
//      const user = this;
//      return{
//          sold_items:
//          sale_items:
//          favorites:
//      }
//  })
// const User = model('User', UserSchema);