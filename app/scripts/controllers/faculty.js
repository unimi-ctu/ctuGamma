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
	  
	    unimiService.getFaculty($routeParams.fKey).success(function(data) {
			$scope.faculty = data;
	    });
	  
		$scope.onlyw4 = function(item) {
			return !$scope.isW4Mode || (item.CdsType && item.CdsType.Key !== 'NOCLASS');
		};
		
		$scope.isOnlyActive = unimiService.isOnlyActive;
	    $scope.isW4Mode = unimiService.isW4Mode;
		
		$scope.showActive = function(item) {
			return !item || !$scope.isOnlyActive || item.Year === unimiService.currentYear;
		};

		$scope.$watch(function(scope) { return $scope.isOnlyActive}, function(newValue, oldValue) { unimiService.setOnlyActive(newValue);});
		$scope.$watch(function(scope) { return $scope.isW4Mode}, function(newValue, oldValue) { unimiService.setW4Mode(newValue);});

	});
