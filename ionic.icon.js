(function(ionic) {

    angular.module('ionic.contrib.icon', ['ionic'])

    .directive('icon', function() {
        return {
            restrict: 'E',
            scope: {
                ios: '@',
                droid: '@',
                default: '@'
            },
            link: function($scope) {
                // Set icon depending on device's platform
                if (ionic.Platform.isIOS()) {
                    $scope.platform = $scope.ios;
                } else if (ionic.Platform.isAndroid()) {
                    $scope.platform = $scope.android;
                }

                // By default use the following icon (if iOS or Android not set)
                if (!$scope.platform) {
                    $scope.platform = $scope.default;
                }

                // Icon type
                $scope.type = 'icon';
            },
            transclude: true,
            replace: true,
            template: '<i class="{{ type }} {{ platform }}"></i>'
        };
    });
    
})(window.ionic);