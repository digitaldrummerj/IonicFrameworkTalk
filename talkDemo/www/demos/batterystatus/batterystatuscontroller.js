(function () {
     "use strict";
     angular.module('talkDemo')
     .controller('BatteryStatusController', [
       '$scope', '$rootScope', '$ionicPlatform', '$cordovaBatteryStatus',
       function ($scope, $rootScope, $ionicPlatform, $cordovaBatteryStatus) {

            $ionicPlatform.ready(function () {
                 console.log('ionicPlatform.ready function');

                 $rootScope.$on("$cordovaBatteryStatus:status", function (event, args) {
                      console.log('battery status');
                      if (args.isPlugged) {
                           alert("Charging -> " + args.level + "%");
                      } else {
                           alert("Battery -> " + args.level + "%");
                      }
                 });
            });
       }]);
}());