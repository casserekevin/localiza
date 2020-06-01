const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/options', async(req, res) => {

    try{
        res.sendFile(path.resolve(`${__dirname}/../constants/${req.query.name}.json`));
    }catch(err){
        return res.status(400).send({ error: 'Falha encontrar arquivo de constantes'});
    }

});

module.exports = app => app.use('/constants', router);