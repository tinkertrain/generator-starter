Yeoman Website Starter Generator
================================

A very simple yeoman generator to kickstart websites.

The scaffolding includes the following:

- HTML5 Boilerplate
- Normalize.css (sass version)
- Compass
- jQuery
- Modernizr
- Autoprefixer
- Uglify
- Concat
- Livereload
- Zurb Foundation's grid system

Install it running

	~ npm install generator-starter

And then to use simply type in the command line:

    ~ yo starter

After yeoman finishes scaffolding, run:
	
	~ grunt initiate

This will copy jquery.min.js, modernizer.js and the foundation grid system files to their respective directories.

The directory structure would then be:

	project_folder
		|___components //bower installed components
		|___node_modules //gruntjs plugins
		|___images
		|___styles
		|___sass
			|___base
				  _fonts.scss
				  _normalize.scss
				  _mymixins.scss
				  _palette.scss
			|___vendor
				|__foundation
					|__components
						  _grid.scss
						  _global.scss
						  _visibility.scss
				_variables.scss
			_foundation.scss
					
			|___modules
			main.scss //this imports the files in the base folder
		|___js
			|___vendor
				  jquery.min.js
				  modernizr.min.js
			|___plugins
			main.js
	.htaccess
	.gitattributes
	.gitignore
	index.html
	crossdomain.xml
	humans.txt
	robots.txt
	config.rb
	config.json
	package.json
	Gruntfile.js
	bower.json
	README.md


After that running:

	~ grunt watch

Will watch the project for changes and compile sass, livereload, uglify and concatenate js files.

If this is in any way useful to you, use it however you want.
