'use strict';

backoffice.factory('backOfficeService', [
    "$http", "CONSTANTS",
    function ($http, CONSTANTS) {
        var service = {};

        service.getAllDevices = function () {
            return $http.get(CONSTANTS.getAllDevices);
        };

        service.getAllEmployees = function () {
            return $http.get(CONSTANTS.getAllEmployees);
        };

        service.employeeSave = function (employee) {
            return $http.put(CONSTANTS.updateEmployee + employee.id, employee);
        };

        service.login = function (loginIn) {
            return $http.post(CONSTANTS.loginEmployee, loginIn);
        };

        return service;
    }
]);