var schedule = require('../controllers/schedule');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app) {
    app.get('/viewSchedule', ensureLoggedIn('/login'), schedule.view);
    app.post('/addReminder', ensureLoggedIn('/login'), schedule.addReminderPost);
    app.post('/addSchedule', ensureLoggedIn('/login'), schedule.addSchedulePost);
    app.delete('/deleteSchedule', ensureLoggedIn('login'), schedule.deleteSchedulePost);
    app.delete('/deleteReminder', ensureLoggedIn('/login'), schedule.deleteReminderPost);
};