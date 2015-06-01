'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:CdsCtrl
 * @description
 * # CdsCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('CdsCtrl', function ($scope, $http, $routeParams, unimiService) {
	  $scope.currentYear = unimiService.currentYear;
	  $scope.cdsKey = $routeParams.cdsKey;
	  $scope.selectedOf = null;
	  
	  $scope.loading = true;
	  
	  $http.get('http://192.168.15.13/unimiRest/unimi/cds/' + $scope.cdsKey + '/ofs').success(function(data) {
		$scope.cds = data;
		
		if (data.OFList.length === 1) {
			$scope.selectedOf = data.OFList[0].Key;
		}
	  }).then(function() { $scope.loading = false; });
	  
	  $scope.select = function(of) {
		$scope.selectedOf = $scope.selectedOf === of.Key ? null : of.Key;
	  };
	  
	  $scope.isAriel = true;
	  $scope.showAriel = function(item) {
		  
		  return !item || !$scope.isAriel || item.ProjectW4List.length;
	  };

	  $scope.isActive = true;
	  $scope.showActive = function(item) {
		  
		  return !item || !$scope.isActive || item.Year === unimiService.currentYear;
	  };
  });
