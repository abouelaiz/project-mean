'use strict';

angular.module('pfeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('upload_doc', {
        url: '/upload_doc',
        templateUrl: 'app/document/upload_doc/upload_doc.html',
        controller: 'UploadDocCtrl'
      });
  });