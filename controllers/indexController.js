//indexController/index.js

//Imports
const indexController = require('./indexRoutes');

//Create routes
indexController.get('/', (req, res) => {
    res.render('index', {title: 'Homepage'});
})

//Exports
module.exports = indexController;