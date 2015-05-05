# node-sass-globbing

Allows you to use glob syntax in imports. Use as a custom importer for node-sass.

Example
````
nodeSassGlobbing = require('node-sass-globbing')

sass.render({
  ...
  importer: nodeSassGlobbing
  ...
})
````
