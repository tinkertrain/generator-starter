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
          },
          //Foundation
          {
            expand: true,
            cwd: 'components/foundation/scss/foundation/',
            src: ['_variables.scss'],
            dest: 'sass/vendor/foundation/'
          },
          {
            expand: true,
            cwd: 'components/foundation/scss/foundation/components/',
            src: ['_global.scss'],
            dest: 'sass/vendor/foundation/components/'
          },
          {
            expand: true,
            cwd: 'components/foundation/scss/foundation/components/',
            src: ['_grid.scss'],
            dest: 'sass/vendor/foundation/components/'
          },
          {
            expand: true,
            cwd: 'components/foundation/scss/foundation/components/',
            src: ['_visibility.scss'],
            dest: 'sass/vendor/foundation/components/'
          }
        ]
      },
    },

    watch: {
      /* watch to see if the sass files are changed, compile and add prefixes */
      styles: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['compass:dev', 'autoprefixer']
      },

      // autoprefix: {
      //   files: ['styles/main.css'],
      //   tasks: ['autoprefixer']
      // },

      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['js/**/*.js', '!js/main.js','js/main.js'],
        tasks: ['uglify:dist', 'concat:dist']
      },

      /* watch our files for change, reload */
      livereload: {
        files: ['*.html', '*.php', 'styles/*.css', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}', 'js/main.min.js'],
        options: {
          livereload: true
        },
      },
    },

  });

  //Task list
  grunt.registerTask('initiate', ['copy', 'uglify:initiate']);
  grunt.registerTask('default', ['watch']);
};