var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);

app.get('/', function(req, res)
{
    res.send('<h1>Test</h1>');
});

server.listen(3000, function(){
    console.log('lock and load');
});
