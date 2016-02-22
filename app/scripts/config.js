// jshint devel:true
(function () {
  'use strict';

  angular
    .module('sampleApp.config', [
      'LocalForageModule'
    ])
    .config(AppConfig);

  function AppConfig($locationProvider, $localForageProvider) {
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(false);

    $localForageProvider.config({
      driver      : $localForageProvider.INDEXEDDB, // if you want to force a driver
      name        : 'SampleDatabase', // name of the database and prefix for your data, it is "lf" by default
      version     : 1.0, // version of the database, you shouldn't have to use this
      storeName   : 'SampleTable', // name of the table
      description : 'some descriptio'
    });

  }

  AppConfig.$inject = [
    '$locationProvider',
    '$localForageProvider'
  ];
})();
