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
        templateUrl: 'views/login.html',
        controller : Logincontroller,
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller : Logincontroller,
    }).when('/forgot', {
        templateUrl: 'views/forgot.html',
    }).when('/resetPass', {
        templateUrl: 'views/resetPass.html',
    }).when('/category', {
        templateUrl: 'views/category.html',
    }).when('/quizz', {
        templateUrl: 'views/quizz.html',
    }).when('/questions', {
        templateUrl: 'views/questions.html',
        controller: QuestionController,
    }).when('/filter', {
        templateUrl: 'views/filter.html',
    })
})



