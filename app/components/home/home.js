/**
 * Home Components module.
 *
 * @module sampleApp.components.home
 */
(function () {
  'use strict';

  angular
    .module('sampleApp.components.home', [
      'LocalForageModule'
    ])
    .component('home', {
      controller: Controller,
      templateUrl: 'components/home/home.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [
    '$localForage'
  ];

  var ctrl;

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($localForage) {
    console.log('Home Controller Constructor');
    ctrl = this;
    ctrl.name = 'Home';
    ctrl.$localForage = $localForage;
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
      console.log(res);
      ctrl.text = res;
    });
  };
})();
