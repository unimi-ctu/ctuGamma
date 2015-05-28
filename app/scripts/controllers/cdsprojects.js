'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:CdsprojectsCtrl
 * @description
 * # CdsprojectsCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('CdsprojectsCtrl', function ($scope, $http, $routeParams) {
	  $scope.cdsKey = $routeParams.cdsKey === 'nokey' ? null : $routeParams.cdsKey;
	  
	  $scope.loadMore = function() {
		  if ($scope.limit < $scope.cds.ProjectList.length) {
			$scope.limit += 10;
		  }
	  }
	  
	  $scope.getCdsData = function() {
		  $scope.limit = 20;
  		  $http.get('http://192.168.15.13/unimiRest/unimi/cds/' + $scope.cdsKey + '/projects').success(function(data) {
			$scope.cds = data;
		  }).error(function() {
			  $scope.cds = null;
		  });

	  }
	  
	  if ($scope.cdsKey)
		$scope.getCdsData();
  });
