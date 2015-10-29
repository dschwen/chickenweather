#/bin/bash

file=/var/log/coop/`date +%Y%m%d`
echo `date '+%H %M'` `/usr/local/bin/read_Th.py` >> $file
