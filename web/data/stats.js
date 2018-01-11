fs   = require('fs');
path = require('path');
var gzipSize = require('gzip-size');

exports.data = function() {
  var data = {
    size: 0
  }

  // get dist path
  var distPath = path.join(__dirname, '../..', 'dist', 'mm.min.css')

  try {
    var string = fs.readFileSync(distPath, 'utf8');

    // console.log((string.length / 1024) + "KB");

    data.size = (gzipSize.sync(string) / 1024).toFixed(2);
  } catch (e) {
    console.log(e);
  }

  // console.log("DATA: " + JSON.stringify(data))
  return data
}