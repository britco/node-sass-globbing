// Settings
var browser = (typeof(window) !== 'undefined') ? true : false,
    root = browser ? window : global,
    nodeSassGlobbing = require('../index.js'),
    sass = require('node-sass'),
    path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    FIXTURES_DIR = path.join(__dirname, 'fixtures');

describe('simple', function() {
  it('should import globs using scss syntax', function(done) {
    var inputFile = path.join(FIXTURES_DIR, 'simple_scss/input.scss')
    var outputFile = path.join(FIXTURES_DIR, 'simple_scss/output.css')

    var callback = function(err,result) {
      var fs = require('fs')

      fs.readFile(outputFile, function(err, data) {
        expect(result.css.toString().trim()).to.equal(data.toString().trim())
        done()
      })
    };

    sass.render({
      file: inputFile,
      importer: nodeSassGlobbing,
      success: callback.bind(null, null),
      error: callback.bind(null),
      outputStyle: 'compressed'
    }, callback)
  })

  it('should import globs using indented syntax', function(done) {
    var inputFile = path.join(FIXTURES_DIR, 'simple_sass/input.sass')
    var outputFile = path.join(FIXTURES_DIR, 'simple_sass/output.css')

    var callback = function(err,result) {
      var fs = require('fs')

      fs.readFile(outputFile, function(err, data) {
        expect(result.css.toString().trim()).to.equal(data.toString().trim())
        done()
      })
    };

    sass.render({
      file: inputFile,
      importer: nodeSassGlobbing,
      success: callback.bind(null, null),
      error: callback.bind(null),
      outputStyle: 'compressed'
    }, callback)
  })
});
