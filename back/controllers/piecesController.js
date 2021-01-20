const Piece = require('../models/Pieces');

const PiecesController = {
    async newPiece(req, res){
        try{
            const piece = await Piece.create(req.body);
            res.send({piece, message:'Articulo subido correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algun error al subir el articulo'})
        }
    },

    async getPieces(req, res){
        try{
            const pieces = await Piece.find();
            res.send(pieces);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todos los usuarios'})
        }
    },

    async updatePieces(req, res){
        try{
            const piece = await Piece.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
            });
            res.send({piece, message:'Artículo modificado corectamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al modificar la informacion del articulo'})
        }
    },

    async deletePieces(req, res){
        try{
            const piece = await Piece.findByIdAndDelete(req.params.id);
            res.json({message:'Artículo eliminado correctamente'})
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al borrar este artículo'})
        }
    }
}

module.exports = PiecesController;