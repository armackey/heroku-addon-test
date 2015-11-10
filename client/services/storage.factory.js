(function () {
  angular
    .module('app')
    .factory('Storage', Storage);
      // injecting $http so we can make calls to the server
      Storage.$inject = ['$http'];

        function Storage($http) {
          // gets all jobs from db
          this.get = function() {
            $http.get('/getJobs').then(function(data) {
              return data;
            });
          };

          this.update = function() {
            $http.put('/updateJob').then(function(data) {

            });
          };

          this.destroy = function() {
            $http.delete('/getJob').then(function(data) {
              return data;
            });
          };

          return this;
        }
  })();