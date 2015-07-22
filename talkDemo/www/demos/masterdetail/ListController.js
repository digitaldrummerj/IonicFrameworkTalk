(function() {
     "use strict";
     angular.module('talkDemo')
          .controller('ListController', [
               '$scope',
               function($scope) {
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

                    $scope.items = [
                         { id: 0 },
                         { id: 1 },
                         { id: 2 },
                         { id: 3 },
                         { id: 4 },
                         { id: 5 },
                         { id: 6 },
                         { id: 7 },
                         { id: 8 },
                         { id: 9 },
                    ];


                    $scope.angularItems = [
                         { id: 'Angular Item 1' },
                         { id: 'Angular Item 2' },
                         { id: 'Angular Item 3' },
                         { id: 'Angular Item 4' },
                         { id: 'Angular Item 5' },
                         { id: 'Angular Item 6' }
                    ];

               }
          ]);
}());