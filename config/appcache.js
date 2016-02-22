(function() {
  'use strict';

  module.exports = {
    options: {
      // Task-specific options go here.
      basePath: '<%= paths.dist %>',
    },
      // Target-specific file lists and/or options go here.
    all: {
      dest: '<%= paths.dist %>/sampleApp.appcache',
      cache: {
        patterns: [
          '<%= paths.dist %>/components/{,*/}*',
          '<%= paths.dist %>/scripts/{,*/}*',
          '<%= paths.dist %>/styles/{,*/}*',
          '<%= paths.dist %>/images/{,*/}*',
          '<%= paths.dist %>/*.ico',
          '<%= paths.dist %>/*.html',
          '<%= paths.dist %>/*.txt'
        ],
      },
      network: '*'
    }
  };
})();
