$(function() {
  // load data
  $.getJSON('/data/today.json', function(data) {
    console.log(data);
  
    var temperature = [],
        humidity = [];

    $.plot("#plot", [temperature, humidity], {
      xaxis: { mode: "time" }
    });
  });
});
