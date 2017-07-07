var fs = require("fs-extra");
var path = require('path');

var config = {distFolder: "../dist/WutzApp-dist",
              contFolder: "./www"};

var cleanDist = function(dir, except, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      if(except && except.length > 0){
        for(var i in except){
           if(file.indexOf(except[i]) === -1){
              console.log("To remove "+file);
              fs.removeSync(file);
           }
        }
      }
      else {
        console.log("To remove out "+file);
        fs.removeSync(file);
      }
    });
  });
};

cleanDist(config.distFolder,[".git"]);
