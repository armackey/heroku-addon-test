angular
  .module('app')
    .factory('storage', ['$window', 
      function ($window) {

        // this.store =  function () {
        //     $window.localStorage.setItem('jobs', 'jobs');
        // };

        this.get = function () {
          return JSON.parse($window.localStorage.getItem('jobs'));
        };

        this.destroy = function () {
          $window.localStorage.removeItem('jobs');
        };

        return this;
  }]);