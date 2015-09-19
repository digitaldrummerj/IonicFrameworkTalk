(function() {
     "use strict";
     angular.module('talkDemo')
          .controller('ListController', [
               '$scope', 'ListService',
               function($scope, ListService) {
                    $scope.data = {
                         shouldShowDelete: false,
                         shouldShowReorder: false,
                         listCanSwipe: true
                    };

                    $scope.edit = function(item) {
                         alert('Edit Item: ' + item.id);
                    };
                    $scope.share = function(item) {
                         alert('Share Item: ' + item.id);
                    };

                    $scope.moveItem = function(item, fromIndex, toIndex) {
                         $scope.items.splice(fromIndex, 1);
                         $scope.items.splice(toIndex, 0, item);
                    };

                    $scope.onItemDelete = function(item) {
                         $scope.items.splice($scope.items.indexOf(item), 1);
                    };

                    $scope.items = ListService.GetItems();


                    $scope.angularItems = ListService.GetAngularItems();

               }
          ]);
}());