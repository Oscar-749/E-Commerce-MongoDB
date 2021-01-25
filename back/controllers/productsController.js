const Car = require('../models/Products');

const CarsController = {
    async newProducts(req, res){
        try{
            const user = req.user;
            const newCar = {...req.body,id_user: user.id};
            const car = await Car.create(newCar);
            res.send({car, message:'Artículo subido correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algún error al subir el artículo'})
        }
    },

    async getProducts(req, res){
        try{
            const cars = await Car.find();
            res.send(cars);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los artículos'})
        }
    },

    async updateProducts(req, res){
        try{
            const car = await Car.findById(req.params.id);
            if(car.id_user === req.user.id){
                const car = await Car.findByIdAndUpdate(req.params.id, req.body,{
                    new: true,
                });
            }else{
                return res.send(403).send({message:'No eres el dueño'})            
            }
            res.send({car, message:'Artículo modificado correctamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al modificar la informacion del articulo'})
        }
    },

    async deleteProducts(req, res){
        try{
            const car = await Car.findByIdAndDelete(req.params.id);
            res.json({message:'Artículo eliminado correctamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al borrar este artículo'})
        }
    }
}

module.exports = CarsController;