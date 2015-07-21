(function () {
  "use strict";
    angular.module('talkDemo')
    .controller('ListController', ['$scope', 
        function ($scope) {        
          $scope.data = {
            showDelete: true
          };
        
          $scope.itemButtons = [
            {
              text: 'Delete',
              type: 'button-assertive',
              onTap: function (item) {
                alert('Delete Item: ' + item.id + ' ?');
              }
            }
          ];
        
          $scope.onItemDelete = function (item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
          };
        
          $scope.items = [
            { 
              id: 1
            },
            {
              id: 2
            },
            {
              id: 3
            },
            {
              id: 4
            },
            {
              id: 5
            },
            {
              id: 6
            },
            {
              id: 7
            },
            {
              id: 8
            },
            {
              id: 9
            },
            {
              id: 10
            }
          ];
    }]);
}());    