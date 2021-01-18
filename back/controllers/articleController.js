const Article = require('../models/Articles');

const ArticlesController = {
    async newArticles(req, res){
        try{
            const article = await Article.create(req.body);
            res.send({article, message:'Articulo subido correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algun error al subir el articulo'})
        }
    },

    async getArticles(req, res){
        try{
            const articles = await Article.find();
            res.send(articles);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los usuarios'})
        }
    },

    async updateArticles(req, res){
        try{
            const article = await Article.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
            });
            res.send({article, message:'Artículo modificado corectamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al modificar la informacion del articulo'})
        }
    },

    async deleteArticles(req, res){
        try{
            const article = await Article.findByIdAndDelete(req.params.id);
            res.json({message:'Artículo eliminado correctamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al borrar este artículo'})
        }
    }
}

module.exports = ArticlesController;