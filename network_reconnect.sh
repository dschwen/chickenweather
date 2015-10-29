#!/bin/bash

if ifconfig wlan0 | grep -q "inet addr:" ; then
  exit
else
  echo `date` "- Network connection down! Attempting reconnection."
  ifup --force wlan0
fi
