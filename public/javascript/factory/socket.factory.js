app.factory('SocketService', function(socketFactory){
    return socketFactory({
        ioSocket: io('http://localhost:3000/')
    });
});
