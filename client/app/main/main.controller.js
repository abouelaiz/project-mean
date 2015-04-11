'use strict';

angular.module('pfeApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
/*
pour ajouter des semestre
    $scope.semestre={
  name:'Semestre3',
  ecole:'Ensias'
}
$http.post('/api/documents',$scope.semestre)
      .success(function (res) {
                console.log("semestre",$scope.semestre)

        $scope.module =res;
      console.log($scope.module )
    
    });

*/
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
