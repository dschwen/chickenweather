var fs = require('fs'),
    dateFormat = require('dateformat');

/**
 * Get the current logfile name
 */
var now = new Date(),
    date = dateFormat(now, "yyyymmdd"),
    path = '/var/log/coop/' + date;

/**
 * Read file
 */
fs.readFile(path, function(err, f){
  var array = f.toString().split('\n');
  
  for (i in array) {
    array[i] = array[i].split(' ');
  }

  console.log(JSON.stringify(array));
});



