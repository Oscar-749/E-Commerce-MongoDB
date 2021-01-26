const Message =require('../models/Message');

const MessageController = {
    async newMessage(req, res){
        try{

        }catch(error){
            console.error(error);
            res.status(500).send({message: 'Ha habido algún error al enviar el mensaje'})
        }
    },
}

module.exports = MessageController;