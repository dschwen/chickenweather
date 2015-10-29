#!/usr/bin/env python

import Adafruit_DHT as dht
h,t = dht.read_retry(dht.DHT22, 4)
print "%0.2f %0.2f" % (t, h)

