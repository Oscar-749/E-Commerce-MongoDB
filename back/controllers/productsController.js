const Product = require('../models/Products');

const ProductsController = {
    async newProducts(req, res){
        try{
            const user = req.user;
            const newCar = {...req.body,id_user: user.id};
            const product = await Product.create(newCar);
            res.send({product, message:'Artículo subido correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algún error al subir el artículo'})
        }
    },

    async getProducts(req, res){
        try{
            const products = await Product.find();
            res.send(products);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los artículos'})
        }
    },

    async getById(req, res){
        try{
            const product = await Product.findById(req.params.id);
            res.send(product);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar el artículo por id'})
        }
    },

    //===FILTROS PARA LOS PRODUCTOS===//
    async getFilter(req, res){
        try{
            const filter = req.query.product ||'coche';
            const products = await Product.find().where({product:filter});           
            res.send(products);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los artículos'})
        }
    },

    async updateProducts(req, res){
        try{
            //const product = await Product.findById(req.params.id);
            //if(product.id_user === req.user.id){
                const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
                    new: true,
                });
            //}else{
            //     return res.send(403).send({message:'No eres el dueño'})            
            //}
            res.send({product, message:'Artículo modificado correctamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al modificar la informacion del articulo'})
        }
    },

    async deleteProducts(req, res){
        try{
            const product = await Product.findByIdAndDelete(req.params.id);
            res.json({message:'Artículo eliminado correctamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al borrar este artículo'})
        }
    },
}

module.exports = ProductsController;