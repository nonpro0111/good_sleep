'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MenuCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(path) {
      return $location.path() === path;
    };
  }]);
