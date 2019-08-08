/*
=============================================
; Title: api-catalog.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: api-catalog.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  api-catalog.js
  08 July 2019
*/

// Start Program

/** API Routes */

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a new user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

router.post('/auth/login', auth_controller.user_login);

router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;

//end program