const express = require('express');
const google_callback_route = express.Router();

const {google_callback_redirect} = require('../controllers/google_callback.js');

google_callback_route.get('/auth/google/callback',google_callback_redirect);

module.exports={google_callback_route}
