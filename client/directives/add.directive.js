angular
  .module('app')
    .directive('addItem', function (storage, $window) {
      return {
        restrict: 'E',
        template: '<button ng-show="isAdding" ng-click="addTodo()" >Save</button>',
        controller: 'mainCtrl',
        link: function(scope, elem, attrs) {
          var id = 0;
          scope.todos = [];
          scope.addTodo = function () {
            scope.todos.push({task: scope.opts.task, dynos: scope.opts.select, frequency: scope.opts.select2, lastRun: 'unspecified', id: id++});
            $window.localStorage.setItem('jobs', JSON.stringify(scope.todos));
            scope.opts.task = '';
            scope.isAdding = false;
          };
        }
      };
    });