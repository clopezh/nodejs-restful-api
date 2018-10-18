var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

var CarController = require('./car/CarController');
app.use('/cars', CarController);

module.exports = app;