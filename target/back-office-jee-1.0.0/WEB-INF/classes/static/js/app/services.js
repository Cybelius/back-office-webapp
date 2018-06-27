'use strict';

backoffice.factory('backOfficeService', [
    "$http", "CONSTANTS",
    function ($http, CONSTANTS) {
        var service = {};

        service.getAllDevices = function () {
            return $http.get(CONSTANTS.getAllDevices);
        };

        return service;
    }
]);