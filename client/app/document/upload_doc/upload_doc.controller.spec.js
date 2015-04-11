'use strict';

describe('Controller: UploadDocCtrl', function () {

  // load the controller's module
  beforeEach(module('pfeApp'));

  var UploadDocCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadDocCtrl = $controller('UploadDocCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
