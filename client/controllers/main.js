(function() {
  'use strict';

  angular
    .module('app')
    .controller('Main', Main);  

      Main.$inject = ['$scope', '$interval', '$window', 'storage'];

      function Main($scope, $interval, $window, storage) {
        
        var vm = this;

        var date = Date.now(),
            min = date + (600 * 1000),
            hour = date + (3600 * 1000),
            daily = date + (3600 * 24 * 1000);

        $scope.todoss = storage.get();
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

