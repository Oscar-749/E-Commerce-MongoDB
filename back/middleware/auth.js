const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const auth = async(req, res, next) => {
    try{
        const token = req.headers.authorization; //saca el token de los headers
        const payload = jwt.verify(token, 'oscar'); //saca el payload del token
        const user = await User.findById(payload.id); //busca el user en la db con el id del payload
        
        if(!user){
            return res.send(401).send({message:'No estás autorizado'})
        }
        req.user = user; //setea el user en el objeto req
        next() //pasa la funcion controladora o al siguiente middleware
    }catch(error){
        console.log(error);
        return res.status(401).send({message:'No estás autorizado'})
    }
}

module.exports = auth;