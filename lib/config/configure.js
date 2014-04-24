var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var configPassport = require('./configurePassport');

exports.config = function (app) {
    configPassport.configPassport(passport);
    
    var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');
    
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../../views'));
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(require('less-middleware')(path.join(__dirname, '../../public')));
    app.use(express.static(path.join(__dirname, '../../public')));
    
    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }
};