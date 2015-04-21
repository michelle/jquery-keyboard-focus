module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'jquery.keyboard-focus.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      build: {
        files: {
          'jquery.keyboard-focus.min.js': ['jquery.keyboard-focus.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);
};
