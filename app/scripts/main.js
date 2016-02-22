/**
 * This is sampleApp module.
 *
 * @module sampleApp
 */
(function () {
  'use strict';

  angular
    .module('sampleApp', [
      'ngComponentRouter',
      'sampleApp.config',
      'sampleApp.components.home',
      'sampleApp.components.about',
      'sampleApp.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$router'];

  /**
   * AppController
   *
   * @class AppController
   * @main sampleApp
   * @constructor
   */
  function AppController ($router) {
    $router.config([
      {
        path: '/home',
        name:'Home',
        component: 'home',
        useAsDefault: true
      },
      {
        path: '/about',
        name:'About',
        component: 'about'
      },
      {
        path: '/contact',
        name:'Contact',
        component: 'contact'
      }
    ]);
  }
})();
