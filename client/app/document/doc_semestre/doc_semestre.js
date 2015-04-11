'use strict';

angular.module('pfeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('doc_semestre', {
        url: '/doc_semestre/:semestre',
        templateUrl: 'app/document/doc_semestre/doc_semestre.html',
        controller: 'DocSemestreCtrl'
      });
  });