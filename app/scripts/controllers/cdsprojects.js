'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:CdsprojectsCtrl
 * @description
 * # CdsprojectsCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('CdsprojectsCtrl', function ($scope, $routeParams, unimiService) {
	  $scope.cdsKey = $routeParams.cdsKey === 'nokey' ? null : $routeParams.cdsKey;
	  
	  $scope.loadMore = function() {
		  if ($scope.cds && $scope.limit < $scope.cds.ProjectList.length) {
			$scope.limit += 10;
		  }
	  };
	  
	  $scope.getCdsData = function() {
		  $scope.limit = 20;
		  unimiService.getCdsProjects($scope.cdsKey).success(function(data) {
			$scope.cds = data;
		  }).error(function() {
			  $scope.cds = null;
		  });

	  };
	  
	  if ($scope.cdsKey) {
		$scope.getCdsData();
	  }
  });
