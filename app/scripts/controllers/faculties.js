'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('FacultiesCtrl', function ($scope, $http) {
	  $http.get('http://192.168.15.13/unimiRest/unimi/faculties').success(function(data) {
		  $scope.faculties = data;
	  });
  });
