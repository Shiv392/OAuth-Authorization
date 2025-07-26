const express = require('express');
const userdetail_route = express.Router();
const {getuserdetail_controller} = require('../../controllers/features/getuser-controller');

userdetail_route.get('/userdetail', getuserdetail_controller);

module.exports={userdetail_route};