#!/bin/bash

(while [ ! -d /vertica/data ]; do
   sleep 1
done

sudo -u dbadmin /opt/vertica/bin/admintools -t start_db -d example) &
