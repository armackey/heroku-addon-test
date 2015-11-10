(function() {
  'use strict';
  
  angular
    .module('app')
    .directive('deleteItem', deleteItem);

       function deleteItem($http) {

        return {
          restrict: 'E',
          template: '<button ng-click="remove(todo)" >delete</button>',
          link: function(scope, elem, attrs) {
            scope.remove = function(todo) {
              console.log(todo);
              $http.delete('/removeJob/' + todo._id).then(function() {
                console.log('deleted');
              });
            };
          }
        };
      }
})();