# node-sass-globbing

[![Build Status](https://travis-ci.org/britco/node-sass-globbing.svg?branch=master)](https://travis-ci.org/britco/node-sass-globbing)
[![Dependency Status](https://david-dm.org/britco/node-sass-globbing.svg)](https://david-dm.org/britco/node-sass-globbing)
[![npm](https://img.shields.io/npm/v/node-sass-globbing.svg)]()

Allows you to use glob syntax in imports (i.e. `@import "dir/*.sass"`). Use as a custom importer for node-sass.

### Example

##### gulpfile.js
````
nodeSassGlobbing = require('node-sass-globbing');

sass.render({
  ...
  importer: nodeSassGlobbing
  ...
});
````

Then you can import globs!

##### foo.sass
````
@import "dir/*.sass"
````

### Tests

````
npm test
````

### License
Available under the [MIT License](LICENSE.md).
