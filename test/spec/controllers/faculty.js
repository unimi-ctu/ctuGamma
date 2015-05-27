'use strict';

describe('Controller: FacultyCtrl', function () {

  // load the controller's module
  beforeEach(module('unimiAppApp'));

  var FacultyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacultyCtrl = $controller('FacultyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
