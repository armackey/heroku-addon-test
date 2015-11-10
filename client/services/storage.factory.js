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
          // deletes a job
          this.destroy = function() {
            $http.delete('/removeJob').then(function(data) {
              return data;
            });
          };
          console.log(this);
          return this;
        }
  })();