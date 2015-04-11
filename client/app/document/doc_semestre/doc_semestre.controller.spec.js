'use strict';

describe('Controller: DocSemestreCtrl', function () {

  // load the controller's module
  beforeEach(module('pfeApp'));

  var DocSemestreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DocSemestreCtrl = $controller('DocSemestreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
