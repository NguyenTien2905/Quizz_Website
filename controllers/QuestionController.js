window.QuestionController = function ($scope,$http, $location) {
    var quizzUrl = 'http://localhost:3000/questions';
    // Khởi tạo đối tượng quizz
    $scope.quizz = {
        currentQuestion: 0,
        score: 0,
    };

    $scope.quizz.getQuestion = function (){
        $http.get(quizzUrl)
        .then(function(response) {
            $scope.quizz.questions = response.data;
        }, function(error) {
        console.log('Lỗi khi tải câu hỏi: ' + error);
        });
    };
   
    $scope.quizz.getQuestion();

    
    $scope.checkAnswer = function(){
        var selectedOption = ($scope.quizz.questions[$scope.quizz.currentQuestion]['selectedOption']);
        var correctOption = ($scope.quizz.questions[$scope.quizz.currentQuestion]['correctOption']);
        if ( selectedOption == correctOption){
            $scope.quizz.score++;
        }
        $scope.nextQuestion();
    };

    $scope.nextQuestion = function(){
        $scope.quizz.currentQuestion++;
    };

    $scope.resetQuiz = function(){
        $scope.quizz.currentQuestion = 0;
        $scope.quizz.score = 0;
    }
}