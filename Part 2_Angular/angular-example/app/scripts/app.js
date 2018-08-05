'use strict';

/**
 * @ngdoc overview
 * @name angularExampleApp
 * @description
 * # angularExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
