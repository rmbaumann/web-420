 /*
=============================================
; Title: index.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: index.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  index.js
  08 July 2019
*/

// Start Program

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
