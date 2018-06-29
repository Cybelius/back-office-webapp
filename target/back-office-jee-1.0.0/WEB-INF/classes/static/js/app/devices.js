'use strict';

controllers.controller("DevicesController", ["$scope", "backOfficeService", "growl",
    function ($scope, backOfficeService, growl) {

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
        $scope.updateButton = "Searching";

        /**
         */
        backOfficeService.getAllDevices().then(function (value) {
            $scope.devices = value.data;
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