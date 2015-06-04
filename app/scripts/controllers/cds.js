'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:CdsCtrl
 * @description
 * # CdsCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('CdsCtrl', function ($scope, $routeParams, unimiService) {
	  $scope.currentYear = unimiService.currentYear;
	  $scope.cdsKey = $routeParams.cdsKey;
	  $scope.selectedOf = null;
	  
	  $scope.loading = true;
	  
	  unimiService.getCdsOfs($scope.cdsKey).success(function(data) {
		$scope.cds = data;
		
		if (data.OFList.length === 1) {
			$scope.selectedOf = data.OFList[0].Key;
		}
	  }).then(function() { $scope.loading = false; });
	  
	  $scope.select = function(of) {
		$scope.selectedOf = $scope.selectedOf === of.Key ? null : of.Key;
	  };
	  
	  $scope.showAriel = function(item) {
		  
		  return !item || !$scope.isAriel || item.ProjectW4List.length;
	  };

	  $scope.showActive = function(item) {
		  
		  return !item || !$scope.isActive || item.Year === unimiService.currentYear;
	  };
	  
	  $scope.isActive = unimiService.isOnlyActive;
  	  $scope.isAriel = unimiService.isOnlyAriel;

  		$scope.$watch(function(scope) { return $scope.isActive}, function(newValue, oldValue) { unimiService.setOnlyActive(newValue);});
		$scope.$watch(function(scope) { return $scope.isAriel}, function(newValue, oldValue) { unimiService.setOnlyAriel(newValue);});

  });
