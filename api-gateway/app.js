 /*
=============================================
; Title: app.js
; Author: Reva Baumann
; Date: 08 July 2019
; Modified by: Reva Baumann
; Description: App.js
;============================================
*/

/*
Expected output:
  Reva Baumann
  App.js
  08 July 2019
*/

// Start Program

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiCatalog = require('./routes/api-catalog');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');


// Database Connection
mongoose.connect('mongodb+srv://admin:b3ll3vu3@buwebdev-cluster-1-ivaeg.mongodb.net/api-gateway?retryWrites=true&w=majority', {
  promiseLibrary: require('bluebird')
})
.then ( () => console.log('connection established'))
.catch( (err) => console.error(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
