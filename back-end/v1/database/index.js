const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://localiza:qwaszx@localiza-qmmiu.mongodb.net/localiza?retryWrites=true&w=majority',{
mongoose.connect('mongodb://localhost/nodelocaliza',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Conexão ao MongoDB realizada com sucesso.')
})
mongoose.Promise = global.Promise;

module.exports = mongoose;