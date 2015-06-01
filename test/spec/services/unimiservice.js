'use strict';

describe('Service: unimiService', function () {

  // load the service's module
  beforeEach(module('unimiAppApp'));

  // instantiate service
  var unimiService;
  beforeEach(inject(function (_unimiService_) {
    unimiService = _unimiService_;
  }));

  it('should do something', function () {
    expect(!!unimiService).toBe(true);
  });

});
