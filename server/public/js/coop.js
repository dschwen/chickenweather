$(function() {
  // load data
  $.getJSON('/data/today.json', function(data) {
    var temperature = [], Tmin = null, Tmax = null,
        humidity = [], Hmin = null, Hmax = null,
        exttemp = [], eTmin = null, eTmax = null,
        exthumi = [], eHmin = null, eHmax = null;

    // extract plot data
    for (var i = 0; i < data.length; ++i) {
      // milli seconds
      var time = (data[i][0]*60 + data[i][1]) * 60 * 1e3,
          T = data[i][2],
          H = data[i][3],
          eT = data[i][4],
          eH = data[i][5];

      temperature.push([time, T]);
      humidity.push([time, H]);

      if (Tmin === null || T < Tmin) Tmin = T;
      if (Tmax === null || T > Tmax) Tmax = T;
      if (Hmin === null || H < Hmin) Hmin = H;
      if (Hmax === null || H > Hmax) Hmax = H;

      exttemp.push([time, eT]);
      exthumi.push([time, eH]);

      if (eTmin === null || eT < eTmin) eTmin = eT;
      if (eTmax === null || eT > eTmax) eTmax = eT;
      if (eHmin === null || eH < eHmin) eHmin = eH;
      if (eHmax === null || eH > eHmax) eHmax = eH;
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

      $('#eTnow').text(data[last][4]);
      $('#eTmin').text(eTmin);
      $('#eTmax').text(eTmax);
      $('#eHnow').text(data[last][5]);
      $('#eHmin').text(eHmin);
      $('#eHmax').text(eHmax);

      $('.values').fadeIn();
    }
 
    $.plot("#plot", [
        { data: exttemp, color: 'rgba(255,0,0,0.3)'}, 
        { data: exthumi, color: 'rgba(0,0,255,0.3)'},
        { label: "Temperature", data: temperature, color: 'rgb(255,0,0)'}, 
        { label: "Humidity", data: humidity, color: 'rgb(0,0,255)'}
      ], {
        xaxis: { mode: "time" }
    });
  });
});
