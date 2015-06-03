'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:TeacherCtrl
 * @description
 * # TeacherCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('TeacherCtrl', function ($scope, $routeParams, unimiService) {
	  unimiService.getTeacher($routeParams.userid).success(function(data) {
		 $scope.teacher = data; 
	  });
  });
