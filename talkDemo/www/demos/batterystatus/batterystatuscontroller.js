     angular.module('talkDemo')
     .controller('BatteryStatusController', [
       '$scope', '$rootScope', '$ionicPlatform', '$cordovaBatteryStatus',
       function ($scope, $rootScope, $ionicPlatform, $cordovaBatteryStatus) {

            $ionicPlatform.ready(function () {
                 console.log('ionicPlatform.ready function');

                 $rootScope.$on("$cordovaBatteryStatus:status", function (result, data) {
                   console.log('battery status', result, data);
                   $scope.batterylevel = data.level;
                   $scope.isPluggedIn = data.isPlugged;
                      if ($scope.isPluggedIn) {
                        $scope.message = "Charging -> " + $scope.batterylevel + "%";
                      } else {
                        $scope.message = "Battery -> " + $scope.batterylevel + "%";
                      }
                 });
            });
       }]);