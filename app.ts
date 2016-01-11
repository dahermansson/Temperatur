import express = require('express');

var app = express();

app.get('/', function (req, res){
    res.send('<h1>Hello World!!</h1>');
})

app.listen(8334, function(){
    console.log("Lyssnar");
})

export = app;