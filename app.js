var express = require('express');
var app = express();
var PORT = process.env.port || 3000;

var middleware = require('./middleware');

app.get('/', middleware.requireAuthentication, function(req,res){
    res.send('Welcome to Express');
});

app.get('/about', middleware.requireAuthentication, function(req,res){
    res.send('Welcome to Express');
});

app.use(express.static(__dirname));

app.listen(PORT, function(){
    console.log("Express Server Started on port " + PORT + "!");
});