const express = require('express');
const Company = require('../models/company');
const User = require('../models/user');
const router = express.Router();
require('../utils/verifyJwt.js')();

router.get('/get', verifyJWT, async(req, res) => {
    try{
        let userEmail = req.query.email;

        let user = (await User.findOne({ email: userEmail }));

        let companyReg = (await Company.findOne({ userID : user._id}));

        if(!companyReg){
            return res.status(404).send({ error: 'Usuário não encontrado.' });
        }

        res.send(companyReg);

    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' })
    }
});

router.post('/create', verifyJWT, async(req, res) => {
    const { email } = req.body;

    try{
        let user = (await User.findOne({ email }));

        if(await Company.findOne({ userID: user._id})){
            return res.status(400).send({ error: 'Empresa já cadastrada' });
        }

        const company = await Company.create(req.body);

        company.userID = user._id;
        company.save();

        return res.send({
            company
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

        let companyReg = await Company.findOne(filter);
        if (!companyReg)
            return res.status(404).send({ error: 'Registro não encontrado' });

        if (companyReg.userID != req.ownerId)
            return res.status(400).send({ error: 'Acesso restrito' });

        for (let idx in req.body)
            companyReg[idx] = req.body[idx];


        let ret = await companyReg.save();

        res.send(ret);

    } catch (err) {
        return res.status(500).send({ error: 'Erro na requisição. Tente novamente mais tarde.' });
    }

});

module.exports = app => app.use('/company', router);