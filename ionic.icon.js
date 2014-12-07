(function(ionic) {

    // Define local variables
    var defaults = {
        type: 'icon',
        map: {}
    };

    /**
    * isEmpty() checks if the given
    * object is empty.
    *
    * @param {Object} obj
    *
    * @return {Boolean}
    */
    function isEmpty(obj) {
        var obj = Object(obj);

        if (Object.keys(obj).length === 0) {
            return true
        }

        return false;
    }

    angular.module('ionic.contrib.icon', ['ionic'])

    /**
    * @ngdoc object
    * @name $ionicIconConfig
    * @module ionic.contrib.icon
    * @description
    * Sets default behavior of the icon directive.
    *
    * @param {String} type
    * @param {Object} map
    *
    * @usage
    * ```js
    * var app = angular.module('app', ['ionic', 'ionic.contrib.icon'])
    * app.constant('$ionicIconConfig', {
    *   type: 'icon',
    *   map: {
    *       'ion-heart': {
    *           ios: 'ion-ios7-heart',
    *           android: 'ion-android-heart'
    *       }
    *   }
    * });
    * ```
    */
    .constant('$ionicIconConfig', defaults)

    /**
    * icon directive displays an icon
    * depending on the defined options.
    */
    .directive('icon', function($ionicIconConfig) {

        return {
            restrict: 'E',
            scope: {
                ios: '@',
                ipad: '@',
                android: '@',
                windows: '@',
                default: '@'
            },
            link: function($scope, $element, $attrs) {

                var options = $ionicIconConfig;

                function setIcon(icon) {

                    // Check if icon is empty
                    if (isEmpty(icon)) {
                        icon = {};
                    }

                    // Set icon depending on device's platform
                    if (ionic.Platform.isIPad()) {
                        $scope.platform = ($scope.ipad || icon.ipad);
                    } else if (ionic.Platform.isIOS()) {
                        $scope.platform = ($scope.ios || icon.ios);
                    } else if (ionic.Platform.isAndroid()) {
                        $scope.platform = ($scope.android || icon.android);
                    } else if (ionic.Platform.isWindowsPhone()) {
                        $scope.platform = ($scope.windows || icon.windows);
                    }

                    // By default use the following icon (if iOS or Android not set)
                    if (!$scope.platform) {
                        $scope.platform = $scope.default;
                    }

                }

                // Check if using icon mapping
                if (!isEmpty(options.map) && options.map[$scope.default]) {
                    setIcon(options.map[$scope.default]);
                } else {
                    setIcon();
                }

                // Set icon type (library to use)
                $scope.type = $attrs['class'];

                if (!$scope.type) {
                    $scope.type = (options.type || defaults.type);
                }

            },
            template: '<i class="{{ type }} {{ platform }}"></i>'
        };

    });
    
})(window.ionic);