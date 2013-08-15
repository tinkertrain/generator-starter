'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var StarterGenerator = module.exports = function StarterGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(StarterGenerator, yeoman.generators.Base);

StarterGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'websiteName',
      message: 'What do you want to call your project?'
    }
  ];

  this.prompt(prompts, function (props) {
    this.websiteName = props.websiteName;

    cb();
  }.bind(this));
};

StarterGenerator.prototype.app = function app() {
  this.mkdir('components');
  this.mkdir('src');
  this.mkdir('src/images');
  this.mkdir('src/js');
  this.mkdir('src/js/plugins');
  this.mkdir('src/js/vendor');
  this.mkdir('src/sass');
  this.mkdir('src/sass/vendor');
  this.mkdir('src/sass/base');
  this.mkdir('src/sass/modules');
  this.mkdir('src/styles');
  this.mkdir('dist');
  this.mkdir('dist/js');
  this.mkdir('dist/styles');
  this.mkdir('dist/images');

  //JS files
  this.template('src/js/main.js', 'src/js/main.js');

  //SASS files
  this.template('src/sass/base/_fonts.scss', 'src/sass/base/_fonts.scss');
  this.template('src/sass/base/_mymixins.scss', 'src/sass/base/_mymixins.scss');
  this.template('src/sass/base/_palette.scss', 'src/sass/base/_palette.scss');
  this.template('src/sass/main.scss', 'src/sass/main.scss');

  //Root files
  this.template('src/index.html', 'src/index.html');
  this.template('src/gitattributes', 'src/.gitattributes');
  this.template('src/gitignore', 'src/.gitignore');
  this.template('src/htaccess', 'src/.htaccess');
  this.template('src/crossdomain.xml', 'src/crossdomain.xml');
  this.template('src/humans.txt', 'src/humans.txt');
  this.template('src/README.md', 'src/README.md');
  this.template('src/robots.txt', 'src/robots.txt');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');

  //Dist files
  this.template('src/htaccess', 'dist/.htaccess');
  this.template('src/crossdomain.xml', 'dist/crossdomain.xml');
  this.template('src/humans.txt', 'dist/humans.txt');
  this.template('src/README.md', 'dist/README.md');
  this.template('src/robots.txt', 'dist/robots.txt');
};

StarterGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};