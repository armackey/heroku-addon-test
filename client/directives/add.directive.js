(function() {
  'use strict';

  angular
    .module('app')
    .directive('addItem', addItem);
      function addItem(storage, $window) {
    
        return {
          restrict: 'E',
          template: '<form>' +
                    '<input type="text" placeholder="do something" ng-model=opts.task>' +
                    '<select name="dyno-size" id="dyno" ng-options="option.amount for option in opts.dynos track by option.id"'+ 
                    'ng-model="opts.select"></select>' +
                    '<select name="frequency" id="frequence"' +
                    'ng-options="option.time for option in opts.frequence track by option.id" ng-model="opts.select2"></select>' +
                    '</form>',
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

      }

})();