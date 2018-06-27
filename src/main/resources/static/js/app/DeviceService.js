'use strict';

angular.module('backoffice.services', []).factory('DevicesService', ["$http", "CONSTANTS", function ($http, CONSTANTS) {
    var service = {};

    service.getAllDevices = function () {
        return $http.get(CONSTANTS.getAllDevices);
    };

    return service;
}]);