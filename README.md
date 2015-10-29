## DHT22

A DHT22 Temperature/Humidity sensor is attached to the GPIO pins of the Raspberry Pi. It is read using teh Adafruit library

## OpenWeatherMap

The OpenWeatherMap service is used to obtain outdoors temperature and humidity data. The API key for this service is stored as plain text in ```/etc/openweathermap```.

# Install

Install the requests python module for fetching the outside weather data.
```
sudo apt-get install python-requests
```

Install the Adafruit DHT library from
https://github.com/adafruit/Adafruit_Python_DHT

