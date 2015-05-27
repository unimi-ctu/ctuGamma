'use strict';

describe('Controller: CdsCtrl', function () {

  // load the controller's module
  beforeEach(module('unimiAppApp'));

  var CdsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CdsCtrl = $controller('CdsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
