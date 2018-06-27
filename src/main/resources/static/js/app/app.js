'use strict';

var backOfficeApp = angular.module('backoffice', ['ui.bootstrap', 'backoffice.controllers',
    'backoffice.services'
]);

backOfficeApp.constant("CONSTANTS", {
    getDevicesByEmployee: "/device/getDevciesByEmployee/",
    getAllDevices: "/devices"
});