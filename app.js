var express = require('express');
var app = express();
var db = require('./db');

var CityController = require('./city/cityController');
app.use('/city', CityController);

module.exports = app;