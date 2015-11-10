(function() {
  'use strict';

  angular
    .module('app')
    .directive('jobForm', Job);

      function Job(Storage, $http) {

        Job.$inject = ['$http, Storage'];

        return {
          restrict: 'E',
          template: '<form>' +
                    '<input type="text" placeholder="do something" ng-model=task>' +
                    '<select name="dyno-size" id="dyno" ng-options="option.amount for option in opts.dynos track by option.id"'+ 
                    'ng-model="opts.select"></select>' +
                    '<select name="frequency" id="frequence"' +
                    'ng-options="option.time for option in opts.frequence track by option.id" ng-model="opts.select2"></select>' +
                    '</form>' +
                    '<button ng-show="isAdding" ng-click="addJob()">add job</button>',
          controller: 'Main',
          link: function(scope, elem, attrs) {

            var vm = this;
            console.log(scope);
            // our job object and it's properties that we want to store in db
            var job = {
              task: scope.task,
              dynos: scope.opts.select.amount,
              frequency: scope.opts.select2.time,
              lastRun: 'unspecified',
              nextRun: scope.opts.select2.nextRun
            };
            scope.addJob = function () {
              console.log(scope.opts.select2);
              console.log(job);
              $http.post('/postJob', job).then(function() {
                
                scope.opts.task = '';  
                scope.isAdding = false;
                scope.todo = Storage.get();
              }); 
              
            };
          }
        };

      }

})();