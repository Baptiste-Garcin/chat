var app = angular.module('Chat', ['ngRoute', 'btford.socket-io']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
                                templateUrl: "./views/login.html",
                                controller: 'MainController'
                            })
                    .when('/index', {
                                templateUrl: "./views/index.html",
                                controller: 'MainController'
                            })
                    .otherwise({redirectTo:'/'});

    $locationProvider.html5Mode(true);
});
