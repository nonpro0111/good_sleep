'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('frontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
  //   .config(function ($routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/hagishiri', {
        templateUrl: 'views/hagishiri.html',
        controller: 'HagishiriCtrl',
        controllerAs: 'hagishiri'
      })
      .when('/hagishiri', {
        templateUrl: 'views/hagishiri.html',
        controller: 'HagishiriCtrl',
        controllerAs: 'hagishiri'
      })
      .when('/unarigoe', {
        templateUrl: 'views/unarigoe.html',
        controller: 'UnarigoeCtrl',
        controllerAs: 'unarigoe'
      })
      .when('/sleep_goods', {
        templateUrl: 'views/sleep_goods.html',
        controller: 'SleepGoodsCtrl',
        controllerAs: 'sleepGoods'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
