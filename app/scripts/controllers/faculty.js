'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:FacultyCtrl
 * @description
 * # FacultyCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
	.controller('FacultyCtrl', function ($scope, $routeParams, unimiService) {
	  $scope.currentYear = unimiService.currentYear;
	  $scope.isW4 = true;
	  
	  unimiService.getFaculty($routeParams.fKey).success(function(data) {
		$scope.faculty = data;
	  });
	  
		$scope.onlyw4 = function(item) {
			return !$scope.isW4 || (item.CdsType && item.CdsType.Key !== 'NOCLASS');
		};
		
		$scope.isActive = true;
		$scope.showActive = function(item) {
			return !item || !$scope.isActive || item.Year === unimiService.currentYear;
		};

	});
