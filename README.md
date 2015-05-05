# node-sass-globbing

Allows you to use glob syntax in imports (i.e. `@import "dir/*.sass"`). Use as a custom importer for node-sass.

### Example
````
nodeSassGlobbing = require('node-sass-globbing');

sass.render({
  ...
  importer: nodeSassGlobbing
  ...
});
````

Then you can import globs!

````
@import "dir/*.sass"
````
