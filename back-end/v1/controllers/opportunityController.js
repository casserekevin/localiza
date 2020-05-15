const express = require('express');
const jwt = require('jsonwebtoken');

const Opportunity = require('../models/opportunity');
const router = express.Router();

router.post('/create', async(req, res) => {

    try{
        
        // PRECISA ABRIR O JWT E SETAR O OWNER
        // nao vi como fzia isso ainda

        const opportunity = await Opportunity.create(req.body);

        return res.send({
            opportunity,
        });
    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Falha no registro'});
    }
});

router.get('/get', async(req, res) => {

    try{
        
        // verificar como trata os query params
        // retornar a lista baseada nos filtros
        // se nao tiver, retorna os ultimos 50

 
    }catch(err){
        console.log(err)
        return res.status(400).send({ error: 'Falha no registro'});
    }
});

module.exports = app => app.use('/opportunity', router);