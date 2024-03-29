/**
 * Created by Josh on 3/24/14.
 */
var user = require('../models/User');
var hashPassword = require('password-hash');
var passport = require('passport');

exports.login = function(req, res){
    res.render('authentication/shared/login', { formPath: 'login', heading: "Please log in" });
};

exports.loginPost = function(req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            console.log('in login');
            if (err) {
                return next(err);
            }
            console.log('about to redirect');
            return next(null, user);
        });
    })(req, res, next);
};

exports.registerPost = function(req, res) {
    console.log('register');

    user.userModel.findOne({username: req.body.username }, function(err, foundUser) {
        if(!foundUser && !err && req.body.password == req.body.confirmpassword) {
            // User not found, so create it
            var usr = new user.userModel({ 'username': req.body.username,
                'password': hashPassword.generate(req.body.password),
                'displayname': req.body.displayname
            });
            console.log('register ' + usr.password);
            usr.save(function (err, result) {
                if (err !== null) {
                    console.log(err);
                } else {
                    console.log(result);
                    console.log('success!');
                }
                req.logIn(usr, function (err) {
                    // TODO: Gracefully handle failure here
                    res.redirect('/login');
                });
                res.redirect('/users');
            });
        }
        else {
            console.log('register failed. user already exists');
            res.redirect('/register');
        }
    });
};

exports.register = function(req, res) {
    res.render('authentication/shared/register', { formPath: 'register', heading: 'Please register' });
};