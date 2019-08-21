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
  User.getById(req.userId, function(err, user) {
    if (err){
      return res.status(500).send('There was an error finding the user.')
    }
    
    if (!user){
      return res.status(404).send('No User Found.');
    } 

    res.status(200).send(user);
  });
};

exports.user_login = function(req, res) {
  User.getOne(req.body.email, function(err, user) {
    if (err) return res.status(500).send('Error on Server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null});

    var token = jwt.sign({ id: user._id}, config.web.secret, {
      expiresIn: 86400
    });

    res.status(200).send({auth: true, token: token});

  })
};

exports.user_logout = function(req, res) {
  res.status(200).send({ auth: false, token: null});
};



// End Program
