const express = require('express');
const Person = require('../models/person');
const User = require('../models/user');
const router = express.Router();
require('../utils/verifyJwt.js')();

router.get('/get', verifyJWT, async(req, res) => {
    try{
        let userEmail = req.query.email;

        let user = (await User.findOne({ email: userEmail }));

        let personReg = (await Person.findOne({ userID : user._id}));

        if(!personReg){
            return res.status(404).send({ error: 'Usuário não encontrado.' });
        }

        res.send(personReg);

    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' })
    }
});

router.post('/create', verifyJWT, async(req, res) => {
    const { email } = req.body;

    try{
        let user = (await User.findOne({ email }));

        if(await Person.findOne({ userID: user._id})){
            return res.status(400).send({ error: 'Profissional já cadastrado' });
        }

        const person = await Person.create(req.body);

        person.userID = user._id;
        person.save();

        return res.send({
            person
        });
    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' })
    }
});

router.post('/edit', verifyJWT, async (req, res) => {

    try {

        let userEmail = req.query.email;

        let user = (await User.findOne({ email: userEmail }));

        let filter = {
            userID: user._id
        };

        let personReg = await Person.findOne(filter);
        if (!personReg)
            return res.status(404).send({ error: 'Registro não encontrado' });

        if (personReg.userID != req.ownerId)
            return res.status(400).send({ error: 'Acesso restrito' });

        for (let idx in req.body)
            personReg[idx] = req.body[idx];


        let ret = await personReg.save();

        res.send(ret);

    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' });
    }

});

module.exports = app => app.use('/person', router);