#!/bin/bash -eux

cp /opt/startup/start-tty* /etc/init
cp /opt/startup/etc_sysconfig_init /etc/sysconfig/init
rm /tmp/startup.tar.gz
yum install -y python-sh

Conf[0]="service.command.nfs.heapsize.min"
Conf[1]="service.command.nfs.heapsize.max"
Conf[2]="service.command.hbmaster.heapsize.min"
Conf[3]="service.command.hbmaster.heapsize.max"
Conf[4]="service.command.hbregion.heapsize.min"
Conf[5]="service.command.hbregion.heapsize.max"
Conf[6]="service.command.cldb.heapsize.min"
Conf[7]="service.command.cldb.heapsize.max"
Conf[8]="service.command.webserver.heapsize.min"
Conf[9]="service.command.webserver.heapsize.max"
Conf[10]="service.command.mfs.heapsize.min"
Conf[11]="service.command.mfs.heapsize.max"

Val[0]="32"
Val[1]="32"
Val[2]="128"
Val[3]="128"
Val[4]="256"
Val[5]="256"
Val[6]="256"
Val[7]="256"
Val[8]="128"
Val[9]="128"
Val[10]="512"
Val[11]="512"

for i in "${!Conf[@]}"; do
  sed -i s/${Conf[$i]}=.*/${Conf[$i]}=${Val[$i]}/ /opt/mapr/conf/warden.conf
done

#sed -i s/mfs.on.virtual.machine=.*/mfs.on.virtual.machine=1/ /opt/mapr/conf/mfs.conf

#yum install -y mapr-hue mapr-pig mapr-hive mapr-hivemetastore mapr-hiveserver2 mapr-oozie mapr-oozie-internal mapr-httpfs

ID=`maprcli license showid | grep -Eo '[0-9]*'`

wget -O /tmp/license.txt "http://ec2-107-22-211-26.compute-1.amazonaws.com:8080/licensegenerator/api/license?type=m7&numnodes=1&grace=30&numdays=730&clusterid=${ID}&customerid=Mapr+Demo+VM"
maprcli license add -is_file true -license /tmp/license.txt

mkdir /mapr
echo "localhost:/mapr /mapr soft,intr,nolock" >> /opt/mapr/conf/mapr_fstab

maprcli config save -values "{cldb.restart.wait.time.sec:5}"
maprcli config save -values "{cldb.volumes.default.replication:1}"
maprcli config save -values "{cldb.volumes.default.min.replication:1}"
VOLUMES=$(maprcli volume list -columns volumename | tail -n +2)
for volume in ${VOLUMES}; do
  maprcli volume modify -name ${volume} -minreplication 1 -replication 1
  if [ $? -ne 0 ]; then
    echo "Warning: unable to set replication factor for volume: ${volume} to 1"
  fi
done
yum install -y mapr-single-node
maprcli acl edit -type cluster -user mapr:fc
maprcli volume create -name tables -replication 1 -path /tables


yum install -y mapr-hue mapr-pig mapr-hive mapr-hivemetastore mapr-hiveserver2 mapr-oozie mapr-oozie-internal mapr-httpfs mapr-metrics

hadoop fs -mkdir /user/root
hadoop fs -mkdir /oozie/share/lib
hadoop fs -mkdir /oozie/examples

for user in user01 user02 hbaseuser mruser; do
  useradd -p `openssl passwd -1 $user` $user
  hadoop fs -mkdir /user/$user
done

tar -xvf /opt/mapr/oozie/oozie-*/oozie-sharelib-*-mapr.tar.gz -C /tmp
hadoop fs -put /tmp/share/lib/* /oozie/share/lib/

tar -xvf /opt/mapr/oozie/oozie-*/oozie-examples.tar.gz -C /tmp
hadoop fs -put /tmp/examples/* /oozie/examples/

hadoop fs -chown -R mapr:mapr /oozie
hadoop fs -chmod -R 777 /oozie

cp /opt/mapr/hue/hue-*/desktop/libs/hadoop/java-lib/hue-plugins-*.jar /opt/mapr/hadoop/hadoop*/lib/

