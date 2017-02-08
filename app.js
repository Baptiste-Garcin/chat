var express = require('express');
var path = require('path');
var http = require('http');
var routing = require('./app_server/routes/routing');
var io = require('socket.io')(http);
var app = express();
var bodyParser = require('body-parser');
var LoginController = require('./app_server/controllers/loginController');
var chatIo = require('./app_server/chat/chatIo');


var server = http.createServer(app);

var user = [];

// app.set('user', []);
// module.exports = app;

app.use(express.static(__dirname + '/public'));

app.get("*", function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routing);

chatIo.listen(server);
chatIo.connection();

// io.listen(server);
//
// io.sockets.on('connection', function(socket){
//     console.log('user connection');
//
//     io.emit('system', {author:"System", content:"New user connected", date:new Date()});
//
//     socket.on('login', function(socket){
//         user.push(socket.username);
//         console.log(user);
//     });
//
//     socket.on('newMessage', function(socket){
//         console.log(app.get('user'));
//         io.emit('newMessage', socket);
//     });

    // socket.on('disconnect', function(socket){
    //     console.log(socket);
    //     app.set('user', []);
    //     io.emit('test', socket);
    //     console.log(app.get('user'));
    // });
// });

server.listen(3000, function(){
    console.log('lock and load');
});
