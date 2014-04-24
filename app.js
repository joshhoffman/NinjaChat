
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

var config = require('./lib/config/configure');
var configRoutes = require('./lib/config/configureRoutes');

var app = express();

// all environments
config.config(app);
configRoutes.configRoutes(app);

mongoose.connect('mongodb://localhost/dogendar');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});