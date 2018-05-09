const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db'); 
const showRoutes = require('./routes/shows');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const UserController = require('./user/UserController');
app.use('/users', UserController);



module.exports = app