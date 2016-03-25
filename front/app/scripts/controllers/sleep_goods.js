'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:SleepGoodsCtrl
 * @description
 * # SleepGoodsCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('SleepGoodsCtrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //var host = "http://127.0.0.1:3000";
    var host = "";
    $scope.itemsPerPage = 15;
    $scope.maxSize = 5;
    $scope.currentPage = 1;

    $scope.getItems = function () {
      $http({
        method: 'GET',
        url: host + '/rakuten_items.json',
        params: {page: $scope.currentPage}
      })
      .success(function(data, status, headers, config){
        $scope.results = data.rakuten_items;
        $scope.totalItems = data.total_item_count;
      })
    }

    $scope.getItems();

    $scope.pageChanged = function () {
      $scope.getItems();
    }
  }]);
