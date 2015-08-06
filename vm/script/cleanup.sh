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

echo "AGGRESSIVE_DELETIONS=${AGGRESSIVE_DELETIONS}"
if [ "x${AGGRESSIVE_DELETIONS}" = "xtrue" ]; then
  echo "Cleaning very aggressiveley"
  service mapr-warden stop
  service mapr-zookeeper stop
  
  yum remove -y mapr-resourcemanager mapr-nodemanager mapr-historyserver
  
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/common/jdiff/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/common/sources/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/hdfs/jdiff/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/hdfs/sources/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/httpfs/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/mapreduce/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/yarn/sources/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/yarn/test/*
  rm -rf /opt/mapr/hadoop/hadoop-2.*/share/hadoop/tools/*
  
  rm -rf /opt/mapr/hadoop/hadoop-0.20.2/lib/jdiff/*
  
  rm -rf /opt/mapr/logs/*
  
  rm -f /opt/mapr/server/logdump
  rm -f /opt/mapr/server/fsck
  rm -f /opt/mapr/server/fsck-phase6
  rm -f /opt/mapr/server/
  rm -f /opt/mapr/server/
  
  rm -rf /opt/mapr/server/tools
  rm -rf /opt/mapr/support
  
  find /opt/mapr/server/ -type f -exec file -i '{}' \; | grep 'application/x-' | sed 's/:.*//g' | xargs strip
  find /opt/mapr/lib/ -type f -exec file -i '{}' \; | grep 'application/x-' | sed 's/:.*//g' | xargs strip
fi
