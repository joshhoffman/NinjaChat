
/*
 * GET home page.
 */

var file = null;
var fs = require('fs');

exports.index = function(req, res){
    if(req.isAuthenticated()) {
        res.render('index', { title: 'Dogendar', user: req.user });
    }
    else {
        res.render('index', { title: 'Dogendar', user: null });
        /*if(file === null)
        {
            console.log(__dirname + '/../views/Ember/index.html');
            fs.readFile(__dirname + '/../views/Ember/index.html', 'utf8', function(err, text) {
                file = text;
                res.send(file);
            });
        }
        else
        {
            res.send(file);
        }*/
    }
};

exports.testindex = function(req, res) {
    if(file === null)
    {
        console.log(__dirname + '/../views/Ember/index.html');
        fs.readFile(__dirname + '/../views/Ember/index.html', 'utf8', function(err, text) {
            file = text;
            res.send(file);
        });
    }
    else
    {
        res.send(file);
    }
};