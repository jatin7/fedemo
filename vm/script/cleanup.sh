#!/bin/bash -eux

if grep -q -i "release 6" /etc/redhat-release ; then
  rm /etc/udev/rules.d/70-persistent-net.rules
  mkdir /etc/udev/rules.d/70-persistent-net.rules
  rm /lib/udev/rules.d/75-persistent-net-generator.rules
fi

rm -fr /dev/.udev/
rm -f /answers.txt
sed -i "/^HWADDR/d" /etc/sysconfig/network-scripts/ifcfg-eth0

yum -y clean all

rm -rf /tmp/*
rm -rf /root/mapr-setup
rm -rf /home/maprdev/*
rm -rf /root/*.iso
