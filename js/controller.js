angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome to Monochrome Music";
    })
    .controller('RegisterController', function($scope, $location, UserAPIService, store) {

        $scope.registrationUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(url + "accounts/api-token-auth/", $scope.data).then(function(results){
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
                $location.path("/todo");
            }).catch(function(err) {
                console.log(err.data);
            });
        }

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    if ($scope.data.username == $scope.registrationUser.username 
                        && $scope.data.password == $scope.registrationUser.password) {
                        
                        $scope.login();
                    }
                }).catch(function(err) {
                    console.log(err)
                });
            }
        }
    });
   