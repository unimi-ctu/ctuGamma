'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:TeachersCtrl
 * @description
 * # TeachersCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
	.controller('TeachersCtrl', function ($scope, $http) {
		$http.get('http://192.168.15.13/unimiRest/unimi/teachers').success(function(data) {
			$scope.teacherList = data;
		});
		
		$scope.getTeachers = function(item) {
			return !$scope.keyword || !$scope.keyword.trim() || item.LastName.indexOf($scope.keyword) >= 0;
		};
	});
