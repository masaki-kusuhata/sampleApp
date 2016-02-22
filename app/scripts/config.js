// jshint devel:true
(function () {
  'use strict';

  angular
    .module('sampleApp.config', [
      'LocalForageModule',
      'ngdexie',
      'ngdexie.ui'
    ])
    .config(AppConfig);

  function AppConfig($locationProvider, $localForageProvider, ngDexieProvider) {
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

    ngDexieProvider.setOptions({name: 'databaseName', debug: false});
    ngDexieProvider.setConfiguration(function (db) {
      db.version(1).stores({
          notes: "++id,title",
      });
      db.on('error', function (err) {
      });
    });
  }

  AppConfig.$inject = [
    '$locationProvider',
    '$localForageProvider',
    'ngDexieProvider'
  ];
})();
