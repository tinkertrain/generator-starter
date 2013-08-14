Yeoman Website Starter Generator
================================

A very simple yeoman generator to kickstart websites.

The scaffolding includes the following:

- HTML5 Boilerplate
- Normalize.css
- Sass
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


The directory structure would then be:

	project_folder
		|_ components //bower installed components
		|_ node_modules //gruntjs plugins
		|_ images
		|_ styles
		|_ sass
			|_ base
				  _fonts.scss
				  _mymixins.scss
				  _palette.scss
			|_ vendor
			|_ modules
			main.scss
		|_ js
			|_ vendor
			|_ plugins
			main.js
	.htaccess
	.gitattributes
	.gitignore
	index.html
	crossdomain.xml
	humans.txt
	robots.txt
	config.json
	package.json
	Gruntfile.js
	bower.json
	README.md


After that run, to watch for changes and compile sass, autoprefix the css, livereload

	~ grunt watch


To build the project (uglify, concat, build a custom modernizr)

	~ grunt build

If this is in any way useful to you, use it in any way you want.


To do:
------

- Separate development environment (by building into a 'dist' folder)
