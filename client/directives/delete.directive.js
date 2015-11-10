(function() {
  'use strict';

  angular
    .module('app')
    .directive('deleteItem', deleteItem);

       function deleteItem($http, Storage) {

        return {
          restrict: 'E',
          template: '<button ng-click="remove(todo)" >delete</button>',
          link: function(scope, elem, attrs) {
            scope.remove = function(todo) {
              $http.delete('/removeJob/' + todo._id).then(function(data) {
              // after deletion, searches db for current jobs
              scope.todos = Storage.query();
              });
            };
          }
        };
      }
})();