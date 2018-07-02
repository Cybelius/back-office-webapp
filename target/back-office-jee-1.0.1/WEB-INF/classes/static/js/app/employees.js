'use strict';

controllers.controller("EmployeesController", ["$scope", "backOfficeService", "growl",
    function ($scope, backOfficeService, growl) {

        /**
         */
        $scope.employees = {
            id: null,
            devices: [],
            name: null,
            lastName: null
        };

        /**
         */
        $scope.updateButton = "Searching";

        /**
         */
        backOfficeService.getAllEmployees().then(function (value) {
            $scope.employees = value.data;
            $scope.updateButton = "Search";
        }, function (reason) {
            growl.error("error occured");
        }, function (value) {
            growl.warning("no callback");
        });

        /**
         */
        $scope.ensureUserIsAuthenticated();
    }
]);