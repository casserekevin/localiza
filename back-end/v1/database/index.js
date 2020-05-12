const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodelocaliza',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected!')
})
mongoose.Promise = global.Promise;

module.exports = mongoose;