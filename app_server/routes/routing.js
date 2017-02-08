var express = require('express');
var app = module.exports = express();
var LoginController = require('../controllers/loginController.js');

app.post('/login', LoginController.login);
