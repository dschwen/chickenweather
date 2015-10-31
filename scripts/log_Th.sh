#/bin/bash

file=/var/log/coop/`date +%Y%m%d`
/usr/local/bin/read_Th.py >> $file
