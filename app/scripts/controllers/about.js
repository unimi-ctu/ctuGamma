'use strict';

/**
 * @ngdoc function
 * @name unimiAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the unimiAppApp
 */
angular.module('unimiAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
