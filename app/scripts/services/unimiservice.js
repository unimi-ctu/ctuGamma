'use strict';

/**
 * @ngdoc service
 * @name unimiAppApp.unimiService
 * @description
 * # unimiService
 * Service in the unimiAppApp.
 */
angular.module('unimiAppApp')
  .service('unimiService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
	this.restUrl = 'http://192.168.15.13/unimiRest/unimi/';
	this.currentYear = '2015';
	
	
  });
