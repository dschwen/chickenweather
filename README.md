## DHT22

A DHT22 Temperature/Humidity sensor is attached to the GPIO pins of the Raspberry Pi. It is read using the Adafruit library

## OpenWeatherMap

The OpenWeatherMap service is used to obtain outdoors temperature and humidity data. The API key for this service is stored as plain text in ```/etc/openweathermap```.

# Install

Install the requests python module for fetching the outside weather data.
```
sudo apt-get install python-requests
```

Install the Adafruit DHT library from
https://github.com/adafruit/Adafruit_Python_DHT

Create a log directory 
```
sudo mkdir /var/log/coop
```

and add the ```log_Th.sh``` to your ```/etc/crontab``
```
*  *    * * *   root    /usr/local/bin/network_reconnect.sh > /var/log/reconnect.log
*  *    * * *   root    /usr/local/bin/log_Th.sh
```

This adds a script to reconnect to the wifi network in case the connection was dropped.

* Using flot http://www.flotcharts.org/
