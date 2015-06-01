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
		});
	  };
	  
	  if ($routeParams.keywords) {
		  $rootScope.keywords = $routeParams.keywords;
		$scope.search($routeParams.keywords);
	  }
  });
