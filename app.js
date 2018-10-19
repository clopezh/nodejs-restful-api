var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var ConsultantController = require('./consultant/ConsultantController');
app.use('/users', UserController);
app.use('/consultants', ConsultantController);

module.exports = app;