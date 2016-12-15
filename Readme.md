
# co-fs

  Node core `fs` wrapped functions that return thunks for [co](https://github.com/visionmedia/co). This repository is a fork from [tj/co-fs](https://github.com/tj/co-fs), updated with a couple of the newer fs methods.

## Installation

```
$ npm install co-fs
```

## Example

 Use all the regular async fs functions without callback hell:

```js
var json = yield fs.readFile('package.json', 'utf8')
var files = yield fs.readdir('/tmp')
```

## License

  MIT
