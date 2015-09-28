     angular.module('talkDemo')
     .controller('BatteryStatusController', [
       '$scope', '$rootScope', '$ionicPlatform', '$cordovaBatteryStatus',
       function ($scope, $rootScope, $ionicPlatform, $cordovaBatteryStatus) {

            $ionicPlatform.ready(function () {
                 console.log('ionicPlatform.ready function');

                 $rootScope.$on("$cordovaBatteryStatus:status", function (result) {
                   console.log('battery status');
                   $scope.batterylevel = result.level;
                   $scope.isPluggedIn = result.isPlugged;
                      if ($scope.isPlugged) {
                        $scope.message = "Charging -> " + $scope.batterylevel + "%";
                      } else {
                        $scope.message = "Battery -> " + $scope.batterylevel + "%";
                      }
                 });
            });
       }]);