angular
  .module('app')
    .directive('editItem', function (storage, $window) {
      return {
        restrict: 'E',
        template: '<button ng-click="edit(id)" >edit</button ng-click="edit()">',
        controller: 'Main',
        link: function(scope, elem, attrs) {
          scope.edit = function (id) {
            console.log(id);
          };
        }
      };
    });