(function () {
  'use strict';

  angular
    .module('app')
    .factory('Storage', Storage);
      // injecting $http so we can make calls to the server
      Storage.$inject = ['$resource'];

        function Storage($resource) {
          // gets all jobs from db
          return $resource('/getJobs', {}, {
      'query': {method:'GET', isArray:true}});
        }
  })();