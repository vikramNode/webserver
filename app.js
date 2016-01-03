var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;



app.get('/about', function(req,res){
    res.send('Welcome to Express');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("Express Server Started on port " + PORT + "!");
});