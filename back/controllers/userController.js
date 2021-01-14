const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
    //====REGISTRO====//
    async register(req, res){
        try{
            console.log(JSON.stringify(req.body));
            const hash = await bcrypt.hash(req.body.password, 6);
            req.body.password = hash;
            const user = await User.create(req.body);
            res.send({user, message:'Usuario creado correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ya hay un email registrado'})
        }
    },

    //====LOGIN====//
    async login(req, res){
        try{
            const user = await User.findOne({email:req.body.email});

            if(!user){
                return res.status(400).send({message:'Correo o contraseña incorrectas'});
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);

            if(!isMatch){
                return res.status(400).send({message:'Credenciales incorrectas'});
            }
            const token = jwt.sign({id:user.id},'oscar',{expiresIn:'1y'});
            res.send({user, token, message:'Has iniciado sesión correctamente'})

        }catch(error){
            console.error(error);
            res.status(400).send({message: 'Hay algún problema al iniciar sesión, verifique los campos'});
        }
    },

    //====BUSCAR USERS====//
    async getAll(req, res){
        try{
            const users = await User.find();
            res.send(users);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los usuarios'})
        }
    },

    //====BUSCAR POR EMAIL====//
    async getByEmail(req, res){
        try{
            const user = await User.findOne({email:req.params.email});
            if(!user){
                return res.status(500).send({message:'No existe este usuario'});
            }
            res.send(user);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al encontrar el usuario con ese email'})
        }
    },

    //====MODIFICAR USERS====//
    async update(req, res){
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            res.send({user, message: 'Usuario modificado correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al modificar los datos del usuario'})
        }
    },

    //====BORRAR USERS====//
    async delete(req, res){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.json({message: "Usuario eliminado correctamente", user});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al borrar este usuario'})
        }
    },
}

module.exports = UserController;