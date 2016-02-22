/**
 * Gruntfiles Service module.
 *
 * @module sampleApp.service.gruntfiles
 */
(function () {
  'use strict';

  angular
    .module('sampleApp.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);

  GruntfilesService.$inject = ['$resource'];

  /**
   * @class GruntfilesService
   * @constructor
   */
  function GruntfilesService($resource) {
    return $resource('/api/gruntfiles');
  }
})();
