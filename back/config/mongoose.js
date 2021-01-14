const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/proyecto-final', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('Conectado correctamente con MongoDB'))
.catch(console.error)