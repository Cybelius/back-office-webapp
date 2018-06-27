'use strict';

var backoffice = angular.module('BackOffice', ['BackOfficeControllers', 'ngRoute', 'angular-growl', 'isteven-multi-select']);

backoffice.config([
    '$routeProvider', 'growlProvider',
    function ($routeProvider, growlProvider) {

        $routeProvider.when('/home', {
            controller: 'HomeController',
            templateUrl: '/home.html'
        }).when('/devices', {
            controller: 'DevicesController',
            templateUrl: '/devices.html'
        }).when('/employees', {
            controller: 'EmployeesController',
            templateUrl: '/employees.html'
        }).when('/employees/employee/:id', {
            controller: 'EmployeeController',
            templateUrl: '/employee.html'
        }).otherwise({
            redirectTo: '/home'
        });

        growlProvider.globalDisableCountDown(true);
        growlProvider.globalPosition('top-center');
        growlProvider.globalTimeToLive(5000);
        growlProvider.onlyUniqueMessages(false);
    }
]);

var controllers = angular.module('BackOfficeControllers', []);

backoffice.constant("CONSTANTS", {
    getDevicesByEmployee: "/device/getDevciesByEmployee/",
    getAllDevices: "/devices",
    getAllEmployees: "/employees"
});
