window.DashboardController = function ($scope,$http, $location) {
    var quizUrl = "http://localhost:3000/quizzes";
    var categoryUrl = "http://localhost:3000/categories"

    $scope.getQuizzes = function(){{
        $http.get(quizUrl).then(function(response){
            $scope.quizzes = response.data;
            console.log($scope.quizzes)
        }, function(error){
            console.log(error);
        })
    }}
    $scope.getQuizzes();

    $scope.getCategories = function(){{
        $http.get(categoryUrl).then(function(response){
            $scope.categories = response.data;
            console.log($scope.categories)
        }, function(error){
            console.log(error);
        })
    }}
    $scope.getCategories();
}