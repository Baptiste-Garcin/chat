var express = require('express');
var path = require('path');
var http = require('http');
var routing = require('./app_server/routes/routing');
var app = express();


var server = http.createServer(app);

app.set('views', path.join(__dirname, 'public/views'));

app.use(express.static(__dirname + '/public'));

app.get("*", function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/', routing);


server.listen(3000, function(){
    console.log('lock and load');
});
