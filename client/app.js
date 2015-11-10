(function() {
  'use strict';

  angular.module('app', ['ui.router', 'ngResource'])

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "partials/main.html",
          controller: 'Main',
          controllerAs: 'Main'
        });

        $urlRouterProvider.otherwise('/');
    });

})();