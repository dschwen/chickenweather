var fs = require('fs');

path = '/var/log/coop/20151101';

fs.readFile(path, function(err, f){
  var array = f.toString().split('\n');
  
  for (i in array) {
    col = array[i].split(' ');
    console.log(col);
  }
});



