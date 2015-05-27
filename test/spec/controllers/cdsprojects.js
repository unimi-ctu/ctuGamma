'use strict';

describe('Controller: CdsprojectsCtrl', function () {

  // load the controller's module
  beforeEach(module('unimiAppApp'));

  var CdsprojectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CdsprojectsCtrl = $controller('CdsprojectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
