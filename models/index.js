const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://skline:skline@ds225608.mlab.com:25608/rest-api-test');

mongoose.Promise = Promise;

module.exports.Show = require("./show");


