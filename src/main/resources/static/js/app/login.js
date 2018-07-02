'use strict';

controllers.controller("LoginController", ["$scope", "backOfficeService", "$routeParams", "$timeout", "growl",
    function ($scope, backOfficeService, $routeParams, $timeout, growl) {

        /**
         */
        $scope.loginIn = {
            email : configuration.employee.email,
            password : configuration.employee.password
        };

        /**
         */
        $scope.login = function () {
            console.log($scope.loginIn);

            if($scope.loginForm.$invalid) {
                return;
            }

            backOfficeService.login($scope.loginIn).then(function (value) {
                $scope.isAdmin = value.data;

                if ($scope.isAdmin) {
                    $scope.setSessionUser($scope.loginIn);
                    growl.success("Employee Successfully log in");
                    $scope.redirectTo('/home');
                } else {
                    growl.error("Oops, Unauthorized Connection!");
                }
            }, function (reason) {
                growl.error("Invalid Credentials");
            }, function (value) {
                growl.warning("no callback");
            });
        };

    }
]);