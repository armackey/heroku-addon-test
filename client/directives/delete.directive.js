angular
  .module('app')
    .directive('deleteItem', function (storage, $window) {
      return {
        restrict: 'E',
        template: '<button ng-click="remove(item)" >delete</button>',
        controller: 'Main',
        link: function(scope, elem, attrs) {
          scope.remove = function(item) {
            var items = storage.get();
            for (var i = 0; i < items.length; i++) {
              if (items[i].id === i) {
              items.splice(item, 1);
             }
            }
            scope.todos.splice(item, 1);
            storage.destroy();
            $window.localStorage.setItem('jobs', JSON.stringify(items));

          };
        }
      };
    });