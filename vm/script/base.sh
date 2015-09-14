#!/bin/bash -eux

sed -i "s/^.*requiretty/#Defaults requiretty/" /etc/sudoers
sed -i "s/^\(.*env_keep = \"\)/\1PATH /" /etc/sudoers

yum install -y nfs-utils wget curl-devel hdparm sdparm dmidecode openssl098e libselinux-python ntp vim-enhanced emacs-nox traceroute man bash zip unzip gzip bzip2 colordiff gcc-c++
ntpdate 0.us.pool.ntp.org

if [ "x${HAS_TWO_NICS}" = "xtrue" ]; then
  echo "enabling eth1..."
  sed -i "s/ONBOOT=\"no\"/ONBOOT=\"yes\"/g" /etc/sysconfig/network-scripts/ifcfg-eth1
fi
