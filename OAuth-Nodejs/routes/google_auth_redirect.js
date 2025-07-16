const express = require('express');
const google_auth_routes = express.Router();
const {google_auth_redirect} = require('../controllers/google_auth_redirect.js')

google_auth_routes.get('/auth/google',google_auth_redirect);

module.exports = {google_auth_routes};