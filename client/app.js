angular.module('app', ['ui.router', 'angularMoment'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "partials/main.html",
        controller: 'mainCtrl'
      });

      $urlRouterProvider.otherwise('/');
    });