'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:TeacherCtrl
 * @description
 * # TeacherCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('TeacherCtrl', function ($scope, $http, $routeParams) {
	  $http.get('http://192.168.15.13/unimiRest/unimi/teacher/' + $routeParams.userid).success(function(data) {
		 $scope.teacher = data; 
	  });
  });
