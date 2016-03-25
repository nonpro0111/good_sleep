'use strict';

describe('Controller: UnarigoeCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var UnarigoeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnarigoeCtrl = $controller('UnarigoeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UnarigoeCtrl.awesomeThings.length).toBe(3);
  });
});
