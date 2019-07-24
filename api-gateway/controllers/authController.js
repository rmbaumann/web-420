 /*
=============================================
; Title: authController.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: authController.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  authController.js
  08 July 2019
*/

// Start Program

// Require Statements
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

// Register a new user on POST
exports.user_register = function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  var newUser = new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email
  });

  // User document
  User.add(newUser, (err, user) => {
    if(err){
      return res.status(500).send('Unable to register User');
    }

    var token = jwt.sign({id: user._id}, config.web.secret, {
      expiresIn: 86400 //24 Hours
    });

    res.status(200).send({auth: true, token: token});
  });
};

// Verify token on GET
exports.user_token = function(req, res) {
  
  var token = req.headers['x-access-token'];

  if(!token){
    return res.status(401).send({ auth: false, message: 'No token provided'});
  }

  jwt.verify(token, config.web.secret, function(err, decoded) {
    if(err){
      return res.status(500).send('Failed to authenticate Token');
    }

    User.getById(decoded.id, function(err, user) {
      if(err){
        return res.status(500).send('User not found')
      }

      if(!user){
        return res.status(404).send('No user found');
      }

      res.status(200).send(user);
    });
  });
};

// End Program