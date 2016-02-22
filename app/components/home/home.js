/**
 * Home Components module.
 *
 * @module sampleApp.components.home
 */
(function () {
  'use strict';

  angular
    .module('sampleApp.components.home', [
      'LocalForageModule',
      'ngdexie'
    ])
    .component('home', {
      controller: Controller,
      templateUrl: 'components/home/home.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [
    '$localForage',
    'ngDexie'
  ];

  var ctrl;

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($localForage, ngDexie) {
    console.log('Home Controller Constructor');
    ctrl = this;
    ctrl.name = 'Home';
    ctrl.$localForage = $localForage;
    ctrl.ngDexie = ngDexie;
  }

  function $canActivate() {
    console.log('Home Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('Home Controller $onInit');
    ctrl.onInit = 'Success';
  };

  Controller.prototype.save = function() {
    ctrl.$localForage.setItem('sample', ctrl.input);
  };

  Controller.prototype.get = function() {
    ctrl.$localForage.getItem('sample').then(function(res) {
      ctrl.text = res;
    });
  };

  Controller.prototype.save2 = function() {
    var note = {
      id:1,
      title: ctrl.input2,
      action: 'create more documentation'
    };

    ctrl.ngDexie.put('notes', note).then(function(){
      ctrl.status = 'success';
    }).catch(function(ex) {
      ctrl.status = 'error'
    });
  };

  Controller.prototype.get2 = function() {
    ctrl.ngDexie.list('notes').then(function(data){
      ctrl.text2 = angular.toJson(data);
    });
  };
})();
