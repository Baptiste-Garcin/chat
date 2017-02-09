app.controller('MainController', ['$http', '$location', '$rootScope','$scope', 'SocketService', function($http, $location, $rootScope, $scope, SocketService){

    if(!$rootScope.username)
    $location.path('/');

    $scope.messages = [];

    SocketService.on("newMessage", function(socket){
        $scope.messages.push(socket);
    });

    SocketService.on("system", function(socket){
        $scope.messages.push(socket);
    });

    SocketService.on("goToIndex", function(socket){
        $location.path('index');
    });

    SocketService.on('usernameAlreadyInUse', function(socket){
        $scope.result = "Username already taken";
    });

    $scope.send = function(postData)
    {
        if(postData.input !== '')
        {
            SocketService.emit('newMessage', {content:postData.input, author:$rootScope.username, date:new Date()});
            $scope.postData.input = '';
        }
    };

    $scope.login = function(postData)
    {
        $rootScope.username = postData.name;
        SocketService.emit('login', {username:postData.name});
        $location.path('login');
    };
}]);
