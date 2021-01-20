const Car = require('../models/Cars');

const CarsController = {
    async newArticles(req, res){
        try{
            const car = await Car.create(req.body);
            res.send({car, message:'Articulo subido correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algun error al subir el articulo'})
        }
    },

    async getCars(req, res){
        try{
            const cars = await Car.find();
            res.send(cars);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los usuarios'})
        }
    },

    async updateCars(req, res){
        try{
            const car = await Car.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
            });
            res.send({car, message:'Artículo modificado corectamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al modificar la informacion del articulo'})
        }
    },

    async deleteCars(req, res){
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