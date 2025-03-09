//indexRoutes/index.js

//Imports
const express = require('express');
const indexRouter = express.Router();
const indexController = require('../controllers/indexController');

//Create route
indexRouter.get('/', indexController);

//Exports
module.exports = indexRouter;