#!/usr/bin/env python

#
# read the sensor inside the coop
#
import Adafruit_DHT as dht

hin,tin = dht.read_retry(dht.DHT22, 4)

#
# obtain weather data for outside
#
import json, requests

# read api key
with open ("/etc/openweathermap", "r") as myfile:
  key = myfile.read().replace('\n', '')

# fetch data
url = 'http://api.openweathermap.org/data/2.5/weather'
params = dict(
  zip='83404,us',
  appid=key
)
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)

# temperature is returned in Kelvin
tout = float(data['main']['temp']) - 273.15
hout = float(data['main']['humidity'])

#
# output data
#
print "%0.2f %0.2f %0.2f %0.2f" % (tin, hin, tout, hout)

