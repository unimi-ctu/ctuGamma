'use strict';

describe('Controller: CdsesCtrl', function () {

  // load the controller's module
  beforeEach(module('unimiAppApp'));

  var CdsesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CdsesCtrl = $controller('CdsesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
