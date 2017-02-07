var app = angular.module('Chat', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
                                templateUrl: "./views/test.html"
                            })
                    .otherwise({redirectTo:'/'});

    $locationProvider.html5Mode(true);
});
