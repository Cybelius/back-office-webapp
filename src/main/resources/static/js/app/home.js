'use strict';

controllers.controller("HomeController", [
    "$scope",
    function ($scope) {

        /**
         */
        $scope.ensureUserIsAuthenticated();
    }
]);