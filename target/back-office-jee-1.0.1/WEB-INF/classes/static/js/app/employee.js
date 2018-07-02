'use strict';

controllers.controller("EmployeeController", ["$scope", "backOfficeService", "$routeParams", "$timeout", "growl",
    function ($scope, backOfficeService, $routeParams, $timeout, growl) {

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
         */
        $scope.getEmployeeButton = "Searching";

        /**
         * get all devices
         */
        backOfficeService.getAllDevices().then(function (value) {
            $scope.devices = value.data;

            //timeout to manage the default selection of isteven select
            $timeout(angular.forEach($scope.employee.devices, function (value) {
                angular.forEach($scope.devices, function (n) {
                    if (value.id == n.id) {
                        n.ticked = true;
                    }
                });
            }), 5000);
        }, function (reason) {
            growl.error("error occured");
        }, function (value) {
            growl.warning("no callback");
        });

        /**
         * get all devices
         */
        backOfficeService.getAllEmployees().then(function (value) {
            $scope.employees = value.data;
            $scope.getEmployeeButton = "Search";

            if ($routeParams.id == 0) {
                // nothing to do
            } else {
                angular.forEach($scope.employees, function (value) {

                    //arrive en premier
                    if (value.id == $routeParams.id) {
                        $scope.employee = value;
                    }
                });
            }
        }, function (reason) {
            growl.error("error occured");
        }, function (value) {
            growl.warning("no callback");
        });

        /**
         */
        $scope.employeeSave = function () {
            $scope.updateButton = "Searching";

            if ($scope.employeeForm.$invalid) {
                return;
            }

            $scope.employee.devices = $scope.devicesSelected;

            backOfficeService.employeeSave($scope.employee).then(function (value) {
                growl.success("Employee successfully updated");
                $scope.updateButton = "Search";
                $scope.redirectTo("/employees");
            }, function (reason) {
                growl.error("error occured");
            }, function (value) {
                growl.warning("no callback");
            });
        };

        /**
         */
        $scope.ensureUserIsAuthenticated();
    }
]);