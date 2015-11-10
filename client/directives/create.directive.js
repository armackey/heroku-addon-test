angular
  .module('app')
    .directive('createItem', function (storage, $window) {
      return {
        restrict: 'E',
        template: '<button ng-hide="isAdding" ng-click="preAdd()" >add new job</button>',
        controller: 'Main',
        link: function(scope, elem, attrs) {
          scope.isAdding = false;
          scope.preAdd = function() {
            scope.isAdding = true;
          };
        }
      };
    });