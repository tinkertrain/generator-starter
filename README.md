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

To use simply type in the command line:

    ~ yo starter

After yeoman finishes scaffolding, run:
	
	~ grunt initiate

This will copy jquery.min.js and uglify modernizer.js to the js/vendor directory.

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
