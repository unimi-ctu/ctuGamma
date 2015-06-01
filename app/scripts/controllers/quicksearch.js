'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:QuicksearchCtrl
 * @description
 * # QuicksearchCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('QuicksearchCtrl', function ($scope, $http, $routeParams, $rootScope) {
	  $scope.limits = {}
	  
	  $scope.search = function(keywords) {
		$http.get('http://192.168.15.13/unimiRest/unimi/quicksearch/' + keywords).success(function(data) {
			$scope.limits = { pmax: 10, tmax: 10, cdsmax: 10, afmax: 10 };
			$scope.results = data;
			
			var listCount = (data.ProjectList.length ? 1 : 0) + (data.TeacherList.length ? 1 : 0) + (data.CdsList.length ? 1 : 0) + (data.AFList.length ? 1 : 0);
			
			if (listCount > 1) {
				$scope.isPClosed = $scope.isTClosed = $scope.isCdsClosed = $scope.isAFClosed = true;
			}
		});
	  };
	  
	  if ($routeParams.keywords) {
		  $rootScope.keywords = $routeParams.keywords;
		$scope.search($routeParams.keywords);
	  }
  });
