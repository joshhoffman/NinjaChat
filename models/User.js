/**
 * Created by Josh on 3/24/14.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    displayname: String,
    reminders: [{
        event: String,
        lastRun: Date,
        frequency: Number,
        category: [String]
    }],
    schedule: [{
        day: [String],
        time: String,
        event: String,
        category: [String]
    }]
});

exports.userModel = mongoose.model("UserSchema", userSchema);