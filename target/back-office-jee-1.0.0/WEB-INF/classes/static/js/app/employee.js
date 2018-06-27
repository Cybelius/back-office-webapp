'use strict';

controllers.controller("EmployeeController", ["$scope", "backOfficeService", "$routeParams", "$timeout",
    function ($scope, backOfficeService, $routeParams, $timeout) {

        /**
         */
        $scope.employees = null;

        /**
         */
        $scope.employee = null;

        /**
         */
        $scope.devices = null;

        /**
         */
        $scope.devicesSelected = null;

        /**
         * get all devices
         */
        backOfficeService.getAllDevices().then(function (value) {
            $scope.devices = value.data;

            $timeout(
            angular.forEach($scope.employee.devices, function (value) {
                angular.forEach($scope.devices, function (n) {
                    if(value.id == n.id) {
                        n.ticked = true;
                    }
                });
            }), 5000);

        }, function (reason) {
            console.log("error occured");
        }, function (value) {
            console.log("no callback");
        });

        /**
         * get all devices
         */
        backOfficeService.getAllEmployees().then(function (value) {
            $scope.employees = value.data;

            if ($routeParams.id == 0) {
                // nothing to do
            } else {
                angular.forEach($scope.employees, function(value) {

                    //arrive en premier
                    if(value.id == $routeParams.id) {
                        $scope.employee = value;
                    }
                });
            }
        }, function (reason) {
            console.log("error occured");
        }, function (value) {
            console.log("no callback");
        });

        /**
         */
        $scope.employeeSave = function () {
            console.log("sublit form");

            console.log($scope.devicesSelected);
        }
    }
]);