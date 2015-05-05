glob = require('glob')
path = require('path')

module.exports = function(url, prev, done) {
  this.prev_list = this.prev_list || []

  if(!glob.hasMagic(url)) {
    // normal url, resolve to an import of the file
    if(url.indexOf('|prev=') === 0) {
      // if there is a |prev keyword, resolve file relative to that file.. so if
      // you do @import |prev=~|foo.sass, it will resolve to ~/foo.sass
      var prev_dir = null
      var prev_re = /^\|prev=([^\|]*?)\|/
      var matches = url.match(prev_re)

      if(matches.length) {
        prev_dir = path.dirname(matches[1])
        url = url.replace(prev_re, '')
        url = path.resolve(prev_dir, url)
        return done({file: url})

      }
    } else {
      return done({file: url})
    }
  }

  // url is a glob, like foo/*.sass, resolve to importing all matching files, so
  // if there is foo/1.sass and foo/2.sass, it will import both of those files
  glob(url, {cwd: path.dirname(prev)}, function (err, files) {
    var ret = {
      contents: "\n"
    }

    files.forEach(function(file) {
      // import all the matched files, passing through the current file. this is
      // because if you didn't, the path will resolve relative to foo/*.sass,
      // which will fail since that is not an actual path.
      ret.contents += '@import "|prev=' + prev + '|' + file + "\";\n"
    })

    done(ret)
  })
};
