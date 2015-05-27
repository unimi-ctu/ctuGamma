'use strict';

/**
 * @ngdoc overview
 * @name unimiAppApp
 * @description
 * # unimiAppApp
 *
 * Main module of the application.
 */
angular
  .module('unimiAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/cdses/:fKey', {
        templateUrl: 'views/cdses.html',
        controller: 'CdsesCtrl'
      })
      .when('/faculty/:fKey', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl'
      })
      .when('/faculties', {
        templateUrl: 'views/faculties.html',
        controller: 'FacultiesCtrl'
      })
      .when('/cds/:cdsKey', {
        templateUrl: 'views/cds.html',
        controller: 'CdsCtrl'
      })
      .when('/teacher/:userid', {
        templateUrl: 'views/teacher.html',
        controller: 'TeacherCtrl'
      })
      .when('/cds/:cdsKey/projects', {
        templateUrl: 'views/cdsprojects.html',
        controller: 'CdsprojectsCtrl'
      })
      .when('/teachers', {
        templateUrl: 'views/teachers.html',
        controller: 'TeachersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
