module.exports = function () {
    const authConfig = require('../config/auth.json');
    const jwt = require('jsonwebtoken');

    this.verifyJWT = function (req, res, next) {

        var token = req.headers['x-access-token'];

        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        jwt.verify(token, authConfig.secret, function (err, decoded) {

            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            req.ownerId = decoded.id;
            next();

        });
    }
}