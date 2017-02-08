var http = require('http');
var io = require('socket.io')(http);


module.exports.listen = function(server){
    io.listen(server);
};

module.exports.connection = function(){
    var user = [];

    io.sockets.on('connection', function(socket){
        var id = socket.id;
        console.log('user connection');

        socket.on('login', function(socket){
            for(var i = 0; i < user.length; i++)
            {
                if(user[i].username == socket.username)
                {
                    io.emit('usernameAlreadyInUse');
                    return false;
                }
            }
            user.push({id:id, username:socket.username});
            io.emit('system', {author:"System", content:"New user connected", date:new Date()});
            io.to(id).emit('goToIndex');
        });

        socket.on('newMessage', function(socket){
            io.emit('newMessage', socket);
        });

        socket.on('disconnect', function(){
            for(var i = 0; i < user.length; i++)
            {
                if(user[i].id == socket.id)
                    user.splice(i, 1);
            }
            io.emit('system', {author:"System", content:"New user disconnected", date:new Date()});

        });
    });
};
