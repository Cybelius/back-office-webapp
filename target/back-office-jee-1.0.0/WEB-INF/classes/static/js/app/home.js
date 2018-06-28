'use strict';

controllers.controller("HomeController", [
    "$scope", 'growl',
    function ($scope, growl) {

        /**
         */
        $scope.ensureUserIsAuthenticated();
    }
]);