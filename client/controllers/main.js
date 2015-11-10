(function() {
  'use strict';

  angular
    .module('app')
    .controller('Main', Main);  
      // $inject allows us to properly inject modules in our case the $scope object
      Main.$inject = ['$scope', '$interval', 'Storage', '$http'];

      function Main($scope, $interval, Storage, $http) {
        // vm(view model) for our invoking object/context
        // using 'this' sometimes yields unexpect results
        var vm = this;
        console.log(vm);
        // sets the time at which the job should run
        var date = Date.now(),
            min = date + (600 * 1000),
            hour = date + (3600 * 1000),
            daily = date + (3600 * 24 * 1000);

        $http.get('/getJobs').then(function(data) {
          $scope.todos = data.data;
          console.log(data.data);
        });

        $scope.todo = Storage.get();
        // listing the amount of dynos that are available and the occurrence
        $scope.opts = {
          dynos: [
            {id: '1', amount: '1x'},
            {id: '2', amount: '5x'},
            {id: '3', amount: '10x'}
        ],
          select: {id: '1', amount: '1x'},
          frequence: [
            {id: '1', time: 'Daily', nextRun: daily, alarm: 'hire' },
            {id: '2', time: 'Hourly', nextRun: hour, alarm: 'me'},
            {id: '3', time: 'Every 10 minutes', nextRun: min, alarm: 'please :)'}
          ],
          select2: {id: '1', time: 'Daily'}
        };

    }

})();

