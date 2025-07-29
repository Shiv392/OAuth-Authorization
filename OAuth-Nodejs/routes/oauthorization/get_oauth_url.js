const express = require('express');
const { getoauth_url_controller } = require('../../controllers/oauthorization/get_oauth_url');
const oauth_url_routes = express.Router();

oauth_url_routes.get('/oauth/geturl', getoauth_url_controller);

module.exports = oauth_url_routes;