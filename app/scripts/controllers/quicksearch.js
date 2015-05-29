'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:QuicksearchCtrl
 * @description
 * # QuicksearchCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('QuicksearchCtrl', function ($scope, $http, $routeParams) {
	  $scope.search = function(keywords) {
		$http.get('http://192.168.15.13/unimiRest/unimi/quicksearch/' + keywords).success(function(data) {
			$scope.results = data;
		})
	  };
	  
	  $scope.search($routeParams.keywords)
  });
