const express = require('express');
const Opportunity = require('../models/opportunity');
const router = express.Router();
const authConfig = require('../config/auth.json');
const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){

    var token = req.headers['x-access-token'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, authConfig.secret, function(err, decoded) {

      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      req.ownerId = decoded.id;
      next();

    });
  }

router.post('/create', verifyJWT, async(req, res) => {

    req.body.ownerId = req.ownerId;

    try{

        const opportunity = await Opportunity.create(req.body);

        return res.send({
            opportunity,
        });

    }catch(err){

        return res.status(400).send({ error: 'Falha no registro'});
    }
});

router.post('/edit', verifyJWT, async(req, res) => {

    try{
        
        let opId = req.query.id;

        let filter = {
            ownerId: req.ownerId,
            _id: opId
        };

        let opportunityReg = await Opportunity.findOne(filter)
        if(!opportunityReg)
            return res.status(400).send({ error: 'Registro não encontrado'});
        
        for(let idx in req.body)
            opportunityReg[idx] = req.body[idx];
          
        let ret = await opportunityReg.save();

        res.send(ret);

    }catch(err){
        return res.status(400).send({ error: 'Falha no registro'});
    }
    
});

router.get('/get', verifyJWT, async(req, res) => {

    try{
        
        let filter = {ownerId: req.ownerId};

        for (idx in req.query)
            if(req.query[idx])
                filter[idx] = req.query[idx];

        let ret = await Opportunity.find(filter)
        
        res.send(ret);

    }catch(err){
        return res.status(400).send({ error: 'Falha no registro'});
    }

});

module.exports = app => app.use('/opportunity', router);