// importing express
const express = require('express');
const routes = express.Router();

// importing the controller
const {generateImage} = require('../controller/openaiController')

routes.post('/gererateimage', generateImage)
// exporting this router module
module.exports = routes;
