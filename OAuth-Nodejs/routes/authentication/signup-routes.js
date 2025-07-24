const express = require('express');
const signup_routes = express.Router();
const {SignupController} = require('../../controllers/authentication/signup');

signup_routes.post('/signup',SignupController);

module.exports={signup_routes}