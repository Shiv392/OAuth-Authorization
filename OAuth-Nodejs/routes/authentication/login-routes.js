const express = require('express');
const login_routes = express.Router();
const {LoginController} = require('../../controllers/authentication/login');

login_routes.post('/login',LoginController);

module.exports={login_routes};