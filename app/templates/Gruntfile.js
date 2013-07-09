module.exports = function(grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Process CSS
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      },
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [
        { src: ['styles/main.css'], dest: 'styles/main.css' }
        ]
      },
    },

    //Process Javascript
    uglify: {
      initiate: {
        files:
        [
          {
            src: ['components/modernizr/modernizr.js'],
            dest: 'js/vendor/modernizr.min.js'
          }
        ]
      },
      dist: {
        files:
        [
          {
            src: ['js/main.js'], dest: 'js/main.min.js'
          }
        ]
      },
    },

    concat : {
      dist : {
        src : ['js/plugins/*.js', 'js/main.js'],
        dest : 'js/main.min.js'
      },
    },

    //copy files from components to js
    copy: {
      initiate: {
        files:
        [
          {
            expand: true,
            cwd: 'components/jquery/',
            src: ['jquery.min.js'],
            dest: 'js/vendor/'
          },
          {
            expand: true,
            cwd: 'components/normalize.scss/',
            src: ['_normalize.scss'],
            dest: 'sass/base/'
          }
        ]
      },
    },

    watch: {
      /* watch to see if the sass files are changed, compile and add prefixes */
      styles: {
        files: ['sass/**/*.scss', 'styles/main.css'],
        tasks: ['compass:dev', 'autoprefixer']
      },

      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['js/main.js', 'components/**/*.js'],
        tasks: ['uglify:dist', 'concat:dist']
      },

      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', 'styles/*.css', 'images/*', 'js/main.min.js'],
        options: {
          livereload: true
        }
      },
    },

  });

  //Task list
  grunt.registerTask('initiate', ['copy', 'uglify:initiate']);
  grunt.registerTask('default', 'watch');
};