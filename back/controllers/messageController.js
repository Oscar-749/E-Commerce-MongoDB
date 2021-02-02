const Message =require('../models/Message');

const MessageController = {
    async newMessage(req, res){
        // try{
        //     const user = req.user;
        //     const newMessage = {...req.body, id_user: user.id};
        //     const message = await Message.create(newMessage);
        //     res.send({message, message:'Mensaje enviado correctamente'})
        // }catch(error){
        //     console.error(error);
        //     res.status(500).send({message: 'Ha habido algún error al enviar el mensaje'})
        // }
    },
}

module.exports = MessageController;