/**
 * Created by Josh on 4/23/14.
 */
var mongoose = require('mongoose');

var chatSchema = mongoose.Schema({
    messages: [{
        message: String,
        time: Date
    }],
    users: [String]             // User IDs
});

exports.chatModel = mongoose.model("ChatSchema", chatSchema);