 /*
=============================================
; Title: user.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: User model and Schema
;============================================
*/

/*

Expected Output


*/

// Start Program
/** Fields Username, Password, Email */

//Require Statements
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);

module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
}

/** Database Requirements */

// end program