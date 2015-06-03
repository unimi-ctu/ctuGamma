'use strict';

/**
 * @ngdoc service
 * @name unimiAppApp.unimiService
 * @description
 * # unimiService
 * Service in the unimiAppApp.
 */
angular.module('unimiAppApp')
  .service('unimiService', function ($http) {
    var that = this;
	
	this.restUrl = 'http://192.168.15.13/unimiRest/unimi/';
	this.currentYear = '2015';
	
	this.getFaculties = function() {
		return $http.get(that.restUrl + 'faculties');
	};
	
	this.getFaculty = function(fKey) {
		return $http.get(that.restUrl + 'faculty/' + fKey + '/cdses');
	};
	
	this.getCdsOfs = function(cdsKey) {
		return $http.get(that.restUrl + 'cds/' + cdsKey + '/ofs');
	};

	this.getCdsProjects = function(cdsKey) {
		return $http.get(that.restUrl + 'cds/' + cdsKey + '/projects');
	};
	
	this.getUserOf = function(userCds, userYear) {
		return $http.get(that.restUrl + 'userOf/' + userCds + '/' + userYear);
	};
	
	this.getUserData = function(email) {
		return $http.get(that.restUrl + 'userdata/' + email);
	};

	this.getTeachers = function() {
		return $http.get(that.restUrl + 'teachers');
	};
	
	this.getTeacher = function(userid) {
		return $http.get(that.restUrl + 'teacher/' + userid);
	};

	this.quicksearch = function(keywords) {
		return $http.get(that.restUrl + 'quicksearch/' + keywords);
	};


  });
