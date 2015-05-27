'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
