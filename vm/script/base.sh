#!/bin/bash -eux

sed -i "s/^.*requiretty/#Defaults requiretty/" /etc/sudoers
sed -i "s/^\(.*env_keep = \"\)/\1PATH /" /etc/sudoers

yum install -y \
  bash \
  bzip2 \
  colordiff \
  curl-devel \
  dmidecode \
  elinks \
  emacs-nox \
  gcc-c++ \
  gzip \
  hdparm \
  lynx \
  man \
  nano \
  nfs-utils \
  ntp \
  openssl \
  rsync \
  sdparm \
  tar \
  traceroute \
  unzip \
  vim-enhanced \
  wget \
  zip \
;

# MAPR-22485 - use Python 3
# yum -y install scl-utils
# wget https://www.softwarecollections.org/en/scls/rhscl/rh-python34/epel-7-x86_64/download/rhscl-rh-python34-epel-7-x86_64.noarch.rpm
# yum -y install rhscl-rh-python34*.noarch.rpm
# yum -y install rh-python34
# scl enable rh-python34 bash
yum -y install libselinux-python

ntpdate 0.us.pool.ntp.org

if [ "x${HAS_TWO_NICS}" = "xtrue" ]; then
  echo "enabling eth1..."
  sed -i "s/ONBOOT=\"no\"/ONBOOT=\"yes\"/g" /etc/sysconfig/network-scripts/ifcfg-eth1
  touch /multi-nics
fi

if [ "x${MAPR_MINIMAL}" = "xtrue" ]; then
  echo "MAPR_MINIMAL=true, placing file flag..."
  touch /mapr-minimal
fi
