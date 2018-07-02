controllers.controller('SecurityController', [
    '$location', 'growl', '$scope', '$rootScope',
    function ($location, growl, $scope, $rootScope) {

        /**
         */
        $scope.updateButton = "Search";

        /**
         */
        $scope.session = {
            user : {
                authenticated : false,
                email : null
            }
        };

        /**
         */
        $scope.$on(EVENT_CURRENT_USER_ERROR, function() {
            logger.debug(EVENT_CURRENT_USER_ERROR);

            $scope.setSessionUser(null);
        });

        /**
         * @param data
         */
        $scope.setSessionUser = function(data) {
            if (data == null) {
                $scope.session.user = {
                    authenticated : false,
                    email : null
                };
            } else {
                $scope.session.user = {
                    authenticated : true,
                    email : data.email
                };
            }
        };

        /**
         */
        $scope.ensureUserIsAuthenticated = function() {
            if ($scope.session.user.authenticated) {
                $rootScope.$broadcast(EVENT_CURRENT_USER_SUCCESS);
            } else {
                $scope.signedUser();
            }
        };

        /**
         */
        $scope.signedUser = function() {
            $scope.setSessionUser(null);

            $location.path('/login');
        };

        /**
         */
        $scope.logout = function() {
            $scope.setSessionUser(null);
            $location.path('/login');
        };

        /**
         * @param location
         */
        $scope.redirectTo = function(location) {
            $location.path(location);
        }
    }
]);
