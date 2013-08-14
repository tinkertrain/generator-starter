module.exports = function (grunt) {
	'use strict';

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//Process CSS (sass and autoprefixer)
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'styles/main.css': 'sass/main.scss'
				},
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/styles/main.css': 'sass/main.scss'
				},
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			dev: {
				files: [
					{ src: ['styles/main.css'], dest: 'styles/main.css' }
				]
			},
			dist: {
				files: [
					{ src: ['styles/main.css'], dest: 'dist/styles/main.css' }
				]
			},
		},

		//Process Javascript

		modernizr: {
			"devFile" : "components/modernizr/modernizr.js",
			"outputFile" : "dist/js/vendor/modernizr.js",
			"extra" : {
		        "shiv" : true,
		        "printshiv" : false,
		        "load" : true,
		        "mq" : false,
		        "cssclasses" : true
			    },
	    "extensibility" : {
        "addtest" : false,
        "prefixed" : false,
        "teststyles" : false,
        "testprops" : false,
        "testallprops" : false,
        "hasevents" : false,
        "prefixes" : false,
        "domprefixes" : false
      },
      "uglify" : true
		},

		uglify: {
			dist: {
				files:
				[
					{
						src: ['js/main.js'],
						dest: 'dis/js/main.min.js'
					}
				]
			},
		},

		concat : {
			dev : {
				src : ['js/plugins/*.js', 'js/main.js'],
				dest : 'js/main.js'
			},
			dist : {
				src : ['js/plugins/*.js', 'js/main.js'],
				dest : 'dist/js/main.js'
			},
		},

		//copy files from components to js
		copy: {
			dist: {
				files:
				[
					{
						expand: true,
						cwd: 'components/jquery/',
						src: ['jquery.min.js'],
						dest: 'dist/js/vendor/'
					}
				]
			},
		},

		watch: {
				/* watch to see if the sass files are changed, compile and add prefixes */
				styles: {
					files: ['sass/**/*.{scss,sass}'],
					tasks: ['sass:dev', 'autoprefixer:dev']
				},

				concatenate: {
					files: ['js/plugins/*.js', 'js/main.js'],
					tasks: ['concat:dev'],
					options: {
						livereload: true,
					},
				},

				/* watch our files for change, reload */
				livereload: {
					files: ['*.html', '*.php', 'styles/*.css', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}', '*.js'],
					options: {
						livereload: true
					},
				},
			},
		});

	//Task list
	grunt.registerTask('build', ['copy:dist', 'uglify:dist', 'sass:dist', 'autoprefixer:dist', 'modernizr']);
	grunt.registerTask('default', ['watch']);
};