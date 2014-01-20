#!/bin/bash -eux

sed -i "s/^.*requiretty/#Defaults requiretty/" /etc/sudoers
sed -i "s/^\(.*env_keep = \"\)/\1PATH /" /etc/sudoers

yum install -y nfs-utils wget hdparm sdparm dmidecode openssl098e libselinux-python ntp
ntpdate 0.us.pool.ntp.org
