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
try:
  data = json.loads(resp.text)
  # temperature is returned in Kelvin
  tout = float(data['main']['temp']) - 273.15
  hout = float(data['main']['humidity'])
  P    = float(data['main']['pressure'])
except:
  tout = float('nan')
  hout = float('nan')
  P    = float('nan')


#
# output data
#
from datetime import datetime
now = datetime.now()
print "%d %d %0.2f %0.2f %0.2f %0.2f %0.2f" % (now.hour, now.minute, tin, hin, tout, hout, P)

