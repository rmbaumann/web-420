 /*
=============================================
; Title: authController.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: Auth Controller
;============================================
*/

/*

Expected Output

*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
    res.sent('NOT IMPLEMENTED: User token lookup GET');
};