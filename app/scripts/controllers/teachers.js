'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:TeachersCtrl
 * @description
 * # TeachersCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
	.controller('TeachersCtrl', function ($scope, unimiService) {
		unimiService.getTeachers().success(function(data) {
			$scope.teacherList = data;
		});
		
		$scope.getTeachers = function(item) {
			return !$scope.keyword || !$scope.keyword.trim() || item.LastName.indexOf($scope.keyword) >= 0;
		};
	});
