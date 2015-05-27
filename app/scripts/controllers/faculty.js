'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:FacultyCtrl
 * @description
 * # FacultyCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
	.controller('FacultyCtrl', function ($scope, $http, $routeParams) {
	  $scope.isW4 = true;
	  $http.get('http://192.168.15.13/unimiRest/unimi/faculty/' + $routeParams.fKey + '/cdses').success(function(data) {
		$scope.faculty = data;
	  });
	  
		$scope.onlyw4 = function(item) {
			return !$scope.isW4 || (item.CdsType && item.CdsType.Key !== 'NOCLASS');
		}
	});
