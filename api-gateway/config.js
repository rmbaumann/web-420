 /*
=============================================
; Title: config.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: config.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  Config.js
  08 July 2019
*/

// Start Program

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;
config.web.secret = 'topsecret';

module.exports = config;