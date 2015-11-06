var fs = require('fs'),
    dateFormat = require('dateformat'),
    express = require('express'),
    app = express();

// current data file
var data = [];

// reread data periodically
updateData();

// Routes
app.use(express.static(__dirname + '/public'));
app.get('/data/today.json', function (req, res) {
  res.send(JSON.stringify(data));
});

// Start server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Chicken server listening at http://%s:%s', host, port);
});


function updateData()
{
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
    var array = f.toString().split('\n'),
        row;
    
    // a new day
    if (data.length > array.length)
      data = [];

    for (var i = data.length; i < array.length-1; ++i) {
      row = array[i].split(' ');
      data[i] = [];
      for (var j = 0; j < row.length; ++j) {
        data[i][j] = parseFloat(row[j] ,10);
      }
    }
  });

  // schedule refresh
  setTimeout(updateData, 60*1000);
}

