(function () {
  "use strict";
    angular.module('talkDemo')
    .controller('ButtonsTabController', [
      '$scope', '$ionicPopup', '$ionicActionSheet', '$ionicModal',
      function ($scope, $ionicPopup, $ionicActionSheet, $ionicModal) {
        $scope.showPopup = function () {
         $ionicPopup.alert({
           title: 'Popup',
           content: 'This is ionic popup alert!'
         });
        };
        $scope.showActionsheet = function () {
            $ionicActionSheet.show({
              titleText: 'Ionic ActionSheet',
              buttons: [
                {
                  text: 'Facebook'
                },
                {
                  text: 'Twitter'
                },
              ],
              destructiveText: 'Delete',
              cancelText: 'Cancel',
              cancel: function () {
                console.log('CANCELLED');
              },
              buttonClicked: function (index) {
                console.log('BUTTON CLICKED', index);
                return true;
              },
              destructiveButtonClicked: function () {
                console.log('DESTRUCT');
                return true;
              }
            });
        };
    }]);
}());    