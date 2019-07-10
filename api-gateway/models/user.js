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

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports = mongoose.model('dianaprince', userSchema);

/** Database Requirements */
