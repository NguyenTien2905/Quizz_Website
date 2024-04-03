angular.module('myApp',['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/homePage.html',
        controller: DashboardController,
    }).when('/introduce', {
        templateUrl: 'views/introduce.html'
    }).when('/contant', {
        templateUrl: 'views/contant.html'
    }).when('/Q&A', {
        templateUrl: 'views/Q&A.html'
    }).when('/login', {
        templateUrl: 'views/login.html'
    }).when('/register', {
        templateUrl: 'views/register.html'
    }).when('/forgot', {
        templateUrl: 'views/forgot.html',
    }).when('/resetPass', {
        templateUrl: 'views/resetPass.html',
    })
})



