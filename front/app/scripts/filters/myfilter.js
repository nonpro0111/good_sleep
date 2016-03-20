'use strict';

/**
 * @ngdoc filter
 * @name frontApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the frontApp.
 */
angular.module('frontApp')
  .filter('truncate', function () {
    return function (text, len = 130) {
      if (!angular.isString(text)) {
        return text;
      }
      if (text.length > len) {
        return text.substring(0, len-1) + "...";
      } else {
        return text;  
      }
    };
  });
