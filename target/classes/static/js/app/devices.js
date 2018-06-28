'use strict';

controllers.controller("DevicesController", ["$scope", "backOfficeService",
    function ($scope, backOfficeService) {

        /**
         */
        $scope.devices = {
            id: null,
            addressMac: null,
            employees: [],
            name: null,
            nameDeviceType: null,
            typeDevices: null
        };

        /**
         */
        backOfficeService.getAllDevices().then(function (value) {
            $scope.devices = value.data;



        }, function (reason) {
            console.log("error occured");
        }, function (value) {
            console.log("no callback");
        });

        /**
         */
        $scope.ensureUserIsAuthenticated();
    }
]);