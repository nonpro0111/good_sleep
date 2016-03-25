'use strict';

describe('Controller: HagishiriCtrl', function () {

  // load the controller's module
  beforeEach(module('frontApp'));

  var HagishiriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HagishiriCtrl = $controller('HagishiriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HagishiriCtrl.awesomeThings.length).toBe(3);
  });
});
