'use strict';

var module = angular.module('backoffice.controllers', []);
module.controller("DeviceController", ["$scope", "DeviceService",
    function ($scope, DeviceService) {
        $scope.devices = {
            id: null,
            addressMac: null,
            employees: [],
            name: null,
            nameDeviceType: null,
            typeDevices: null
        };

        DeviceService.getAllDevices().then(function (value) {
            console.log(value.data);

            $scope.devices = value.data;

        }, function (reason) {
            console.log("error occured");
        }, function (value) {
            console.log("no callback");
        });
    }
]);