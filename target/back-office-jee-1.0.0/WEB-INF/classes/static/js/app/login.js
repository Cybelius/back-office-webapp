'use strict';

controllers.controller("LoginController", ["$scope", "backOfficeService", "$routeParams", "$timeout", "growl",
    function ($scope, backOfficeService, $routeParams, $timeout, growl) {

        /**
         */
        $scope.loginIn = {
            email : configuration.login.email,
            password : configuration.login.password
        };

        /**
         */
        $scope.login = function () {

            if($scope.loginForm.$invalid) {
                return;
            }

            var login = configuration.login.email;

            if(login == $scope.loginIn.email) {
                $scope.setSessionUser($scope.loginIn);

                $scope.redirectTo('/home');
            } else {
                growl.error("Invalid Credentials");
            }
        };

    }
]);