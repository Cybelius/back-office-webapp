'use strict';

controllers.controller("EmployeesController", ["$scope", "backOfficeService",
    function ($scope, backOfficeService) {

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
        backOfficeService.getAllEmployees().then(function (value) {
            $scope.employees = value.data;

        }, function (reason) {
            console.log("error occured");
        }, function (value) {
            console.log("no callback");
        });
    }
]);