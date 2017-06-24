app.factory('SocketService', function(socketFactory){
    return socketFactory({
        ioSocket: io('https://damp-anchorage-53305.herokuapp.com/')
    });
});
