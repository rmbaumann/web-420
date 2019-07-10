 /*
=============================================
; Title: users.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: users.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  users.js
  08 July 2019
*/

// Start Program

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
