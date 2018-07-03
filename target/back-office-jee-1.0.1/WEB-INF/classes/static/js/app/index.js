'use strict';

var backoffice = angular.module('BackOffice', ['BackOfficeControllers', 'ngRoute', 'ngAnimate',
    'angular-growl', 'isteven-multi-select']);

backoffice.config([
    '$routeProvider', 'growlProvider',
    function ($routeProvider, growlProvider) {

        $routeProvider.when('/home', {
            controller: 'HomeController',
            templateUrl: '/back-office-jee-1.0.1/home.html'
        }).when('/devices', {
            controller: 'DevicesController',
            templateUrl: '/back-office-jee-1.0.1/devices.html'
        }).when('/employees', {
            controller: 'EmployeesController',
            templateUrl: '/back-office-jee-1.0.1/employees.html'
        }).when('/employees/employee/:id', {
            controller: 'EmployeeController',
            templateUrl: '/back-office-jee-1.0.1/employee.html'
        }).when('/login', {
            controller: 'LoginController',
            templateUrl: '/back-office-jee-1.0.1/login.html'
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
    getDevicesByEmployee: "/back-office-jee-1.0.1/device/getDevciesByEmployee/",
    getAllDevices: "/back-office-jee-1.0.1/devices",
    getAllEmployees: "/back-office-jee-1.0.1/employees",
    updateEmployee: "/back-office-jee-1.0.1/employees/employee/",
    loginEmployee: "/back-office-jee-1.0.1/login"
});

// backoffice.constant("CONSTANTS", {
//     getDevicesByEmployee: "/device/getDevciesByEmployee/",
//     getAllDevices: "/devices",
//     getAllEmployees: "/employees",
//     updateEmployee: "/employees/employee/",
//     loginEmployee: "/login"
// });
