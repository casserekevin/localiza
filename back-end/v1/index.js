const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/opportunityController')(app);
require('./controllers/constantsController')(app);
require('./controllers/userController')(app);

app.listen(process.env.PORT || 8080);

// Add BD
// Colocar sistema de autenticação
// Deixar CRUD generico
// Revisar hierarquia de pastas