const express = require('express');
const auth = require('./users/authentication.js');
const user = require('./users/crud.js');
const oportunity = require('./app/oportunidades/crud.js');
const app = express();

app.get('/', function (req, res) {
    return res.send('API is running');
});

app.listen(process.env.PORT || 8080);

// Add BD
// Colocar sistema de autenticação
// Deixar CRUD generico
// Revisar hierarquia de pastas

//App routes

app.route('/app/oportunidades/create')
    .post(oportunity.create);

app.route('/app/oportunidades/update')
    .post(oportunity.update);    

app.route('/app/oportunidades/query')
    .post(oportunity.get);    

app.route('/app/oportunidades/get')
    .post(oportunity.get);


//Users Routes

app.route('/user/create')
    .post(user.create);

app.route('/user/update')
    .put(user.update);

app.route('/user/login')
    .post(auth.login);    