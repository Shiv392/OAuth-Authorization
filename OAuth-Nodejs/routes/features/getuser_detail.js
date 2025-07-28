const express = require('express');
const userdetail_route = express.Router();
const {getuserdetail_controller} = require('../../controllers/features/getuser-controller');

userdetail_route.get('/userprofile', getuserdetail_controller);

module.exports={userdetail_route};