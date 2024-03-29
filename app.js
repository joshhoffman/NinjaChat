
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

var config = require('./lib/config/configure');
var configRoutes = require('./lib/config/configureRoutes');

var chatSocket = require('./Chat/ChatSocket');

var app = express();

// all environments
config.config(app);
configRoutes.configRoutes(app);

mongoose.connect('mongodb://localhost/ninjachat');

/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/

var port = app.listen(app.get('port'));

var io = require('socket.io').listen(port, function() {
    console.log('Express server listening on port ' + app.get('port'));
});

chatSocket.setIO(io);

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});