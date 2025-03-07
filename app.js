//Main entry point for the application

//Imports
const express = require('express');
const app = express();
const path = require('node:path');

//Set port variable
const PORT = process.env.PORT || 3000;

//Create server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

//Create route
app.get('/', (req, res) => {
    res.send('Hello World');
});

