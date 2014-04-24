/**
 * Created by Josh on 3/31/14.
 */
var user = require('../models/User');

exports.view = function(req, res) {
    // TODO: remove test code
    /*req.user.schedule = {day: ['test'], event: 'test event', category: [ 'test category1', 'test category2' ]};
    req.user.schedule.push({day: ['test2'], event: 'test event2', category: [ 'test category3']});
    req.user.reminders = {event: 'reminder event', frequency: 2};
    req.user.reminders.push({event: 'reminder event2', frequency: 23});*/
    //req.user.save(function(err, result) {
    //    if(!err) {
            res.render('schedule/viewSchedule', { user: req.user });
    //    }
    //});
};

exports.addReminderPost = function(req, res) {
    // TODO: add functionality to add stuff
    user.userModel.findOne({username: req.body.username}, function(err, foundUser) {
        if(err) {
            res.redirect('/');
        }
        else {
            // TODO: save stuff
        }
    });
    res.render('/schedule/viewSchedule', { user: req.user });
};

exports.deleteReminderPost = function(req, res) {
    // TODO: delete reminders
};

exports.addReminderCategoryPost = function(req, res) {
    // TODO: add reminder category
};

exports.addSchedulePost = function(req, res) {
    // TODO: add schedules
    user.userModel.findOne({username: req.body.username}, function(err, foundUser) {
        if(err) {
            res.redirect('/');
        }
        else {
            // TODO: save stuff
        }
    });
    res.render('/schedule/viewSchedule', { user: req.user });
};

exports.deleteSchedulePost = function(req, res) {
    // TODO: delete schedule
};

exports.addScheduleCategoryPost = function(req, res) {
    // TODO: add schedule category
};