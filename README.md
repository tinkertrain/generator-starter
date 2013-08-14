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
- Image optimization
- HTML minification
- Zurb Foundation's grid system

Install it running

	~ npm install generator-starter

And then to use simply type in the command line:

    ~ yo starter


The directory structure would then be:

	project_folder
		|_ dist
			|_ images //optimized images
			|_ styles
					main.css //compressed styles
			|_js
					main.min.js //concatenated and uglified js
				index.html //minified html
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


After that to watch for changes and compile sass, autoprefix the css, and live reload, run:

	~ grunt watch


To build the project (uglify, concat, build a custom modernizr, compress css, htmlmin, imagemin)

	~ grunt build

If this is in any way useful to you, use it in any way you want.