const Sell =require('../models/Sell');

const SellController = {
    async newSell(req, res){
        try{
            const sell = await Sell.create(req.body);
            res.send({sell,message:'Venta efectuada correctamente'});
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algún error al efectuar la venta'})
        }
    },

    async getSell(req, res){
        try{
            const sell = await Sell.find();
            res.send(sell);
        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Hay algún problema al sacar todas las ventas'})
        }
    }
}

module.exports = SellController;