const express = require('express');
const route = express.Router();

const { Signin, Signup } = require('../Controllers/Auth');
route.post('/signin', Signin);
route.post('/signup',Signup);

module.exports = route;