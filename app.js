var express = require('express');
var path = require('path');
var http = require('http');
var io = require('socket.io')(http);
var app = express();
var bodyParser = require('body-parser');
var chatIo = require('./app_server/chat/chatIo');


var server = http.createServer(app);

var user = [];


app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use(express.static(__dirname + '/public'));

app.get("*", function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

chatIo.listen(server);
chatIo.connection();

server.listen(process.env.PORT || 3000, function() {
  console.log("Lock & load");
})
