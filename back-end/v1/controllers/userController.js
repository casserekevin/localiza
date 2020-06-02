const express = require('express');
const User = require('../models/user');
const router = express.Router();
require('../utils/verifyJwt.js')();

router.post('/edit', verifyJWT, async (req, res) => {

    try {

        let userEmail = req.query.email;

        let filter = {
            email: userEmail
        };

        let userReg = await User.findOne(filter)
        if (!userReg)
            return res.status(404).send({ error: 'Registro não encontrado' });

        if (userReg.id != req.ownerId)
            return res.status(400).send({ error: 'Acesso restrito' });

        for (let idx in req.body)
            userReg[idx] = req.body[idx];


        let ret = await userReg.save();

        res.send(ret);

    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' });
    }

});

router.get('/get', verifyJWT, async (req, res) => {
    try{
        let userEmail = req.query.email;

        let filter = {
            email: userEmail
        };

        let userReg = await User.findOne(filter);

        if(!userReg){
            return res.status(404).send({ error: 'Usuário não encontrado.' });
        }

        res.send(userReg);

    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' })
    }
});

module.exports = app => app.use('/user', router);