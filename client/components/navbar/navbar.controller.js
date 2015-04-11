'use strict';

angular.module('pfeApp')
  .controller('NavbarCtrl', function ($scope, $location, $http,Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Semestre',
      'link': '/doc_semestre'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };
 $http.get('/api/documents')
      .success(function (res) {
        $scope.semestre =res;
    
    });
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });