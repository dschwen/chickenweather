$(function() {
  // load data
  $.getJSON('/data/today.json', function(data) {
    var temperature = [], Tmin = null, Tmax = null,
        humidity = [], Hmin = null, Hmax = null,
        exttemp = [],
        exthumi = [];

    // extract plot data
    for (var i = 0; i < data.length; ++i) {
      // milli seconds
      var time = (data[i][0]*60 + data[i][1]) * 60 * 1e3,
          T = data[i][2],
          H = data[i][3];

      temperature.push([time, T]);
      humidity.push([time, H]);

      if (Tmin === null || T < Tmin) Tmin = T;
      if (Tmax === null || T > Tmax) Tmax = T;
      if (Hmin === null || H < Hmin) Hmin = H;
      if (Hmax === null || H > Hmax) Hmax = H;

      exttemp.push([time, data[i][4]]);
      exthumi.push([time, data[i][5]]);
    }

    // current values
    var last = data.length - 1;
    if (last >=0) {
      $('#Tnow').text(data[last][2]);
      $('#Tmin').text(Tmin);
      $('#Tmax').text(Tmax);
      $('#Hnow').text(data[last][3]);
      $('#Hmin').text(Hmin);
      $('#Hmax').text(Hmax);
      $('#values').fadeIn();
    }
 
    $.plot("#plot", [temperature, humidity, exttemp, exthumi], {
      xaxis: { mode: "time" }
    });
  });
});
