var fs=require('fs');
var rimraf=require('rimraf');
var path=require('path');
fs.writeFileSync('./chaitanya/text1.txt','Hi!');
fs.writeFileSync('./chaitanya/text2.txt','Hi!');
fs.writeFileSync('./chaitanya/text3.txt','Hi!');


var uploadsDir = __dirname + '/chaitanya';
console.log(uploadsDir);
fs.readdir(uploadsDir, function(err, files) {
  files.forEach(function(file, index) {
    fs.stat(path.join(uploadsDir, file), function(err, stat) {
      var endTime, now;
      if (err) {
        return console.error(err);
      }
    
        now = new Date().getTime();
      endTime = new Date(stat.ctime).getTime() +3600;
      if (now > endTime) {
        return rimraf(path.join(uploadsDir, file), function(err) {
          if (err) {
            return console.error(err);
          }
          console.log('successfully deleted');
        
        });
      }
    });
  });
});