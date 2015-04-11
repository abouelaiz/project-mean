'use strict';

angular.module('pfeApp')
  .controller('DocSemestreCtrl', function ($scope,$http,$stateParams) {
    $scope.message = 'Hello';


$scope.dialogShown=false;

	$scope.semestre_courant = { 
			id:$stateParams.semestre
		};


		$scope.element = [];



	$scope.detail_Module = function(id){
		$scope.module.forEach(function(item) {
					if (item._id == id) {
						$scope.module_details=item;
						console.log('Le module  !!!',item)
					}
				});

						$scope.element_details=[];

		$scope.element.forEach(function(item) {
					if (item.id_module == id) {
						$scope.element_details.push(item);
						console.log('les elements',item.name)
					}
				});

		$scope.dialogShown=true;


	}




    $http.get('/api/documents/' +$scope.semestre_courant.id)
			.success(function (res) {
				$scope.module =res;
				$scope.module.forEach(function(entry) {
 $http.get('/api/documents/element/' +entry._id)
					.success(function (elem) {
						console.log('les elements',elem )
     elem.forEach(function(entry) {
	 $scope.element.push(entry)
	 						  console.log( $scope.element)

		});


                  });			});
		




		});
 




/*

insertion element
	$scope.module={
	sigle:'M1.2.1',
	name:'element 1.2.1',
	id_module:'5528153761e20d8c0e211cf8',
  responsable: 'hamid',
  coefficient: 1,
  VH_Td:10,
  VH_Tp:20,
  VH_Cours:30,
  filiaire:'INFORMATIQUE'
}
 $http.post('/api/documents',$scope.module)
			.success(function (res) {
				$scope.module =res;
			console.log($scope.module )
		
		});

// insertion module
		$scope.module={
		sigle:'M1.2',	
	name:'Module2',
	id_semestre:'5528134ae50acbe005e8f2de',
	responsable:'ma3raftche'

  
}
	$scope.semestre_courant = { 
			id:$stateParams.semestre
		};
 $http.post('/api/documents',$scope.module)
			.success(function (res) {
				$scope.module =res;
			console.log($scope.module )
		
		});


*/




  });

//"5527a466481e4fe40c730c2a"    "5527a489481e4fe40c730c2b"




