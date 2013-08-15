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
					style: 'expanded',
          lineNumbers: true
				},
				files: {
					'src/styles/main.css': 'src/sass/main.scss'
				},
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/styles/main.css': 'src/sass/main.scss'
				},
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			dev: {
				files: [
					{ src: ['src/styles/main.css'], dest: 'src/styles/main.css' }
				]
			},
			dist: {
				files: [
					{ src: ['src/styles/main.css'], dest: 'dist/styles/main.css' }
				]
			},
		},

		//Process Javascript

		modernizr: {
			"devFile" : "src/components/modernizr/modernizr.js",
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
						src: ['dist/js/main.js'],
						dest: 'dist/js/main.min.js'
					}
				]
			},
		},

		concat : {
			dist : {
				src : ['src/js/plugins/*.js', 'src/js/main.js'],
				dest : 'dist/js/main.js'
			},
		},

		//Process html
		useminPrepare: {
		  html: 'dist/index.html',
		  options: {
		  	uglify: 'uglify'
		  },
		},

		//clean dist folders
		clean: {
			dist: ['dist/js/*', 'dist/images/*', 'dist/styles/*', 'dist/index.html']
		},

		usemin: {
		  html: 'dist/index.html'
		},

		htmlmin: {
		        dist: {
		            options: {
		                removeComments: true,
		                collapseWhitespace: true,
		                removeEmptyAttributes: true,
		                removeCommentsFromCDATA: true,
		                removeRedundantAttributes: true,
		                collapseBooleanAttributes: true
		            },
		            files: {
		                // Destination : Source
		                'dist/index.html': 'dist/index.html'
		            }
		        }
		    },

		//Process images
		imagemin: {
		    png: {
		      options: {
		        optimizationLevel: 7
		      },
		      files: [
		        {
		          expand: true,
		          cwd: 'src/images/',
		          src: ['**/*.png'],
		          dest: 'dist/images/',
		          ext: '.png'
		        }
		      ]
		    },
		    jpg: {
		      options: {
		        progressive: true
		      },
		      files: [
		        {
		          expand: true,
		          cwd: 'src/images/',
		          src: ['**/*.jpg'],
		          dest: 'dist/images/',
		          ext: '.jpg'
		        }
		      ]
		    }
		  },

		//copy files from components to js
		copy: {
			dist: {
				files:
				[
					{
						expand: true,
						cwd: 'src/components/jquery/',
						src: ['jquery.min.js'],
						dest: 'dist/js/vendor/'
					},
					{
						expand: true,
						cwd: 'src',
						src: ['index.html'],
						dest: 'dist/'
					}
				]
			},
		},
		watch: {
				/* watch to see if the sass files are changed, compile and add prefixes */
				styles: {
					files: ['src/sass/**/*.{scss,sass}'],
					tasks: ['sass:dev', 'autoprefixer:dev']
				},

				/* watch our files for change, reload */
				livereload: {
					files: ['src/*.html', 'src/*.php', 'src/styles/*.css', 'src/images/**/*.{png,jpg,jpeg,gif,webp,svg}', 'src/*.js'],
					options: {
						livereload: true
					},
				},
			},
		});

	//Task list
	grunt.registerTask('build', ['clean','copy:dist', 'sass:dist', 'autoprefixer:dist', 'modernizr', 'concat:dist', 'uglify:dist', 'useminPrepare', 'usemin', 'htmlmin:dist', 'imagemin']);
	grunt.registerTask('default', ['watch']);
};