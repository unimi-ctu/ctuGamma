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
	  
	  $scope.getCdsData = function() {
		  $http.get('http://192.168.15.13/unimiRest/unimi/cds/' + $scope.cdsKey + '/projects').success(function(data) {
			$scope.cds = data;
		  });
	  };
	  
	  if ($scope.cdsKey)
		$scope.getCdsData();
  });
