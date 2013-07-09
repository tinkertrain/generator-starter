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
      message: 'What do you want to call your Web site?'
    }
  ];

  this.prompt(prompts, function (props) {
    this.websiteName = props.websiteName;

    cb();
  }.bind(this));
};

StarterGenerator.prototype.app = function app() {
  this.mkdir('components');
  this.mkdir('images');
  this.mkdir('js');
  this.mkdir('js/plugins');
  this.mkdir('js/vendor');
  this.mkdir('sass');
  this.mkdir('sass/base');
  this.mkdir('sass/modules');
  this.mkdir('styles');

  //JS files
  this.template('js/main.js', 'js/main.js');

  //SASS files
  this.template('sass/base/_fonts.scss', 'sass/base/_fonts.scss');
  this.template('sass/base/_mymixins.scss', 'sass/base/_mymixins.scss');
  this.template('sass/base/_palette.scss', 'sass/base/_palette.scss');
  this.template('sass/main.scss', 'sass/main.scss');

  //Root files
  this.template('index.html', 'index.html');
  this.template('gitattributes', '.gitattributes');
  this.template('gitignore', '.gitignore');
  this.template('htaccess', '.htaccess');
  this.template('config.rb', 'config.rb');
  this.template('crossdomain.xml', 'crossdomain.xml');
  this.template('humans.txt', 'humans.txt');
  this.template('README.md', 'README.md');
  this.template('robots.txt', 'robots.txt');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
};

StarterGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
