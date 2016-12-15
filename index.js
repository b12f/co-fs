
/**
 * Module dependencies.
 */

var thunk = require('thunkify');
var fs = require('fs');

/**
 * Methods to wrap.
 */

var methods = [
  'access',
  'appendFile'
  'chmod',
  'chown',
  'close',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchmod',
  'lchown',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'read',
  'readFile',
  'readdir',
  'readlink',
  'realpath',
  'rename',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'write',
  'writeFile',
];

// wrap

methods.forEach(function(name){
  if (!fs[name]) return;
  exports[name] = thunk(fs[name]);
});

// .exists is still messed

exports.exists = function(path){
  return function(done){
    fs.stat(path, function(err, res){
      done(null, !err);
    });
  }
};
