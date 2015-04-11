'use strict';

angular.module('pfeApp')
  .controller('UploadDocCtrl', function ($scope,$http,FileUploader,Auth) {
 $scope.message = 'Hello';
 $scope.Id_semestre_choisi=null;
 $scope.Id_module_choisi=null;
 $scope.Id_element_choisi=null;
 $scope.semestre=null;
 $scope.module=null;
 $scope.coment=null;
  ///connection
 $scope.isCollapsed = true;
 $scope.isLoggedIn = Auth.isLoggedIn;
 $scope.isAdmin = Auth.isAdmin;
 $scope.getCurrentUser = Auth.getCurrentUser;
 console.log('le nom est ',$scope.getCurrentUser());

 $scope.gategoriechoisi=null;
$scope.gategorie = {
  values: [
    "Cours",
    "Td/Tp",
   "Examen"
  ]
};
//l'upload des doc 
var uploader=$scope.uploader = new FileUploader({
      url: '/api/upload_docs/file'
    });

$scope.files=[];
   uploader.onCompleteItem = function(fileItem, response, status, headers) {
     
    //    console.info('onCompleteItem', angular.fromJson(fileItem._xhr.response));
            $scope.files.push(angular.fromJson(fileItem._xhr.response));
        };
      

//une fois le semestre choisi on telecharge les module
$scope.choix_semestre=function (id) {
$http.get('/api/documents/'+ id)
          .success(function (semestre) {
     $scope.module=semestre
console.log(semestre)
                  }); 
$scope.Id_module_choisi=null;
 $scope.element=null;
                  }

$scope.choix_module=function (id) {
$http.get('/api/documents/element/'+ id)
          .success(function (semestre) {
     $scope.element=semestre
console.log(semestre)
                  }); 
 $scope.Id_element_choisi=null;

                  }
//je recupere les semestres
$http.get('/api/documents/' )
					.success(function (semestre) {
     $scope.semestre=semestre

                  });	



$scope.valider=function(){

  if (!$scope.Id_element_choisi) {
      window.alert("Erreur\n\nMerci de vérifier element.");
      return;
    }

  if (!$scope.gategoriechoisi) {
      window.alert("Erreur\n\nMerci de vérifier gategorie.");
      return;
    }
   if (!$scope.coment) {
      if (!window.confirm("Confirmation\n\n savez vous un commentaire c'est tres utile \n\nÊtes-vous certain de partager ce document sans commentare ?")) {
        return;
      }
    
 }
var currentTime = new Date();
 // console.log(uploader.queue)
 //je boucle sur tous les fichier uploader et remover ensuite je filtre
$scope.files.forEach(function(entry) {
uploader.queue.forEach(function(ent) {
     if (entry.nom == ent._file.name  ){
$scope.doc = {
      id_element:$scope.Id_element_choisi,
     id_user:$scope.getCurrentUser()._id,
      categorie:$scope.gategoriechoisi,
      commentaire:$scope.coment,
      name:entry.nom,
      path:entry.path,
      Taille:entry.size,
      date_depos:currentTime,
      NB_Telechargement:0
        }
      console.log("objet a envoyer",$scope.doc)

     $http.post('/api/upload_docs/document', $scope.doc)
        .success(function(result) {
        console.log(result)
        })
        .error(function(error) {
          console.log(error);
        }); 

  }
});

        });
$scope.razMail();

};

$scope.razMail = function() {
   $scope.Id_semestre_choisi=null;
 $scope.Id_module_choisi=null;
 $scope.Id_element_choisi=null;
 $scope.semestre=null;
 $scope.module=null;
 $scope.coment=null;
 uploader.clearQueue();
  $scope.gategoriechoisi=null;

   
  }
//je recupere les module
/*$http.get('/api/documents/module' )
					.success(function (module) {
     $scope.module=module

                  });	

$http.get('/api/documents/element' )
					.success(function (element) {
     $scope.element=element

                  });	*/



  });
