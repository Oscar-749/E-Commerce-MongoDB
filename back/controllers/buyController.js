const Buy =require('../models/Buy');

const BuyController = {
    async newBuy(req, res){
        try{
            const buy = await Buy.create(req.body);
            res.send({buy,message:'Compra efectuada correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algún error al efectuar la compra'})
        }
    },

    async getBuy(req, res){
        try{
            const buy = await Buy.find();
            res.send(buy);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todas las compras'})
        }
    }
}

module.exports = BuyController;