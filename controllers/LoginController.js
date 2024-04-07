window.Logincontroller = function($scope, $http, $location){
    var userUrl = "http://localhost:3000/users";

    $scope.login = function(){
        var userClient = {
            ...$scope.user
        }
        $http.get(userUrl).then(function(res){
            var userDB = res.data; 
            for ( index in userDB){
                if( userClient.email === userDB[index].email && userClient.password === userDB[index].password
                ){
                    $location.path('/');
                }
            }
        })
    }

    $scope.register = function(){
        
        var valid = true;

    if (!$scope.inputValue || !$scope.inputValue.name.length < 5 || !$scope.inputValue.name.length > 15){
        valid = false;
    }
    if (!$scope.inputValue || !isEmailFormat($scope.inputValue.email)){
        valid = false;
    }
    if (!$scope.inputValue || !validatePassword($scope.inputValue.password) ){
        valid = false;
    }

    if (valid){
        var new_user = {
            ...$scope.inputValue
        }
        $http.post(userUrl, new_user).then(function($response) {
            if ($response.status == 201){
                $location.path('/');
            }
        },function(errors){
            console.log(errors);
        }) 
    } else {
        console.log("Dăng ký thất bại")
    }
        
    }

    function isEmailFormat(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(data);
    }
    
    function validatePassword(password) {
        const regex = /^(?=.*\d)[a-zA-Z0-9]{4,16}$/;
        return regex.test(password);
      }
}