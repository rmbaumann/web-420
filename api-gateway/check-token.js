 /*
=============================================
; Title: check-token.js
; Author: Reva Baumann
; Date: 19 August 2019
; Modified by: Reva Baumann
; Description: check-token.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  check-token.js
  19 August 2019
*/

// Start Program

var jwt = require('jsonwebtoken');
var config = require('./config');

/** Check the HTTP Header for a valid JSON Web Token
 * @param req
 * @param res
 * @param next
*/

function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

// Export the module
module.exports = checkToken;