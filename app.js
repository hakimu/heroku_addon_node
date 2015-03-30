var http = require('http');

var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send('Hello World');
});

http.createServer(app).listen(process.env.PORT || 3000, function(){
	console.log('Starting on port....')
});