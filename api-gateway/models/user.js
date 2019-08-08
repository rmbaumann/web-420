 /*
=============================================
; Title: user.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: User model and Schema
;============================================
*/


// Start Program

// Declare the mongoose variable and import the mongoose module
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the employee schema with a first and last name
let userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

// Export the User model set to the user schema
var model = mongoose.model('User', userSchema);
module.exports = model;
module.exports.add = (user, callback) => {
  user.save(callback);
};

// Use findOne/getOne to recall user, defined by Username of individual
module.exports.getOne = (e, callback) => {
  query = { username: e };
  model.findOne(query, callback);
}

module.exports.getById = (id, callback) =>{
  var query = {_id: id};
  model.findById(query, callback);
}



// end program