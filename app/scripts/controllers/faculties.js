'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('FacultiesCtrl', function ($scope, unimiService) {
	  unimiService.getFaculties.success(function(data) {
		  $scope.faculties = data;
	  });
  });
