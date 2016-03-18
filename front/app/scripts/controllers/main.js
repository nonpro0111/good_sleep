'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var host = "http://127.0.0.1:3000/";
    $http({
      method: 'GET',
      url: host + 'rakuten_items.json'
    })
    .success(function(data, status, headers, config){
      $scope.results = data;
    })
  }]);
