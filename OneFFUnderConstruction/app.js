
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var engines = require('consolidate');
var favicon = require('static-favicon');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.set('view engine', 'html');
/*app.engine('html', function(str, options) {
   return function(locals) {
       console.log("!!!!");
       return str;
   };
});*/
app.use(favicon());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
/*if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}*/

//app.get('/', routes.index);
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/views/index.html');
});
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
