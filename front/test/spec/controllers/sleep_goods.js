'use strict';

describe('Controller: SleepGoodsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var SleepGoodsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SleepGoodsCtrl = $controller('SleepGoodsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SleepGoodsCtrl.awesomeThings.length).toBe(3);
  });
});
