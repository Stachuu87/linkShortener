const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

const port = process.env.port || 1400;

app.use(bodyParser.json());

app.get('/api/shorten', function(req, res){
    api.shorten(req.query.url, function(err, short){
        if(err) {
            res.json({
                error: true,
                message: err.message
            })
        } else {
            res.json({
                error: false,
                message: short
            })
        }
    })
});

app.post('/api/user/create', function (req, res){
    api.createUser(req.body, function(err, status){
        if(err) {
            res.json({
                error: true,
                message: err.message
            })
        } else {
            res.json({
                error: false,
                message: status
            })
        }
    });
})

app.listen(port, function() {
    console.log("App on port: " + port);
});

process.on('uncaughtException', function (err) {
    console.log(err);
});