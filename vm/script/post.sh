#!/bin/bash -eux

INSTALL_CMD="yum install -y"

enabled ()
{
  if [ "$1" == "0" ]; then
    return 1
  else
    return 0
  fi
}

hive_enabled ()
{
  enabled "${MAPR_HIVE_VERSION:-}"
  return $?
}

hive_install ()
{
  hive_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-hive mapr-hivemetastore mapr-hiveserver2"
    # Test if we were passed a blank string, whichcase we install latest
    if [ ! -z "${MAPR_HIVE_VERSION}" ]; then
      PKG="mapr-hive-${MAPR_HIVE_VERSION} mapr-hivemetastore-${MAPR_HIVE_VERSION} mapr-hiveserver2-${MAPR_HIVE_VERSION}"
    fi

    ${INSTALL_CMD} ${PKG}
  fi
}

hbase_enabled ()
{
  enabled "${MAPR_HBASE_VERSION:-}"
  return $?
}

hbase_install ()
{
  hbase_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-hbase"
    if [ ! -z "${MAPR_HBASE_VERSION:-}" ]; then
      PKG="mapr-hbase-${MAPR_HBASE_VERSION}"
    fi

    ${INSTALL_CMD} ${PKG} mapr-hbasethrift
  fi
}

pig_enabled ()
{
  enabled "${MAPR_PIG_VERSION:-}"
  return $?
}

pig_install ()
{
  pig_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-pig"
    if [ ! -z "${MAPR_PIG_VERSION:-}" ]; then
      PKG="mapr-pig-${MAPR_PIG_VERSION}"
    fi

  ${INSTALL_CMD} ${PKG}
  fi
}

hue_enabled ()
{
  enabled "${MAPR_HUE_VERSION:-}"
  return $?
}

hue_install ()
{
  hue_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-hue"
    if [ ! -z "${MAPR_HUE_VERSION:-}" ]; then
      PKG="mapr-hue-${MAPR_HUE_VERSION}"
    fi

    ${INSTALL_CMD} ${PKG} mapr-httpfs

    #Install Hue dependencies
    oozie_enabled
    if [ $? -eq 0 ]; then
      MAPR_OOZIE_VERSION=""
      oozie_install
    fi

    pig_enabled
    if [ $? -eq 0 ]; then
      MAPR_PIG_VERSION=""
      pig_install
    fi
  fi
}

flume_enabled ()
{
  enabled "${MAPR_FLUME_VERSION:-}"
  return $?
}

flume_install ()
{
  flume_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-flume"
    if [ ! -z "${MAPR_FLUME_VERSION:-}" ]; then
      PKG="mapr-flume-${MAPR_FLUME_VERSION}"
    fi
  
  ${INSTALL_CMD} ${PKG}
  fi
}

hcatalog_enabled ()
{
  enabled "${MAPR_HCATALOG_VERSION:-}"
  return $?
}

hcatalog_install ()
{
  hcatalog_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-hcatalog"
    if [ ! -z "${MAPR_HCATALOG_VERSION:-}" ]; then
      PKG="mapr-hcatalog-${MAPR_HCATALOG_VERSION}"
    fi

  ${INSTALL_CMD} ${PKG}
  fi
}

oozie_enabled ()
{
  enabled "${MAPR_OOZIE_VERSION:-}"
  return $?
}

oozie_install ()
{
  oozie_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-oozie"
    if [ ! -z "${MAPR_OOZIE_VERSION:-}" ]; then
      PKG="mapr-oozie-${MAPR_OOZIE_VERSION}"
    fi

  ${INSTALL_CMD} ${PKG}
  fi
}

mahout_enabled ()
{
  enabled "${MAPR_MAHOUT_VERSION:-}"
  return $?
}

mahout_install ()
{
  mahout_enabled
  if [ $? -eq 0 ]; then
    PKG="mapr-mahout"
    if [ ! -z "${MAPR_MAHOUT_VERSION:-}" ]; then
      PKG="mapr-mahout-${MAPR_MAHOUT_VERSION}"
    fi
  
  ${INSTALL_CMD} ${PKG}
  fi
}

install_packages ()
{
 hive_install
 hbase_install
 hue_install
 pig_install
 flume_install
 hcatalog_install
 oozie_install
 mahout_install
}

tar -xvzf /tmp/startup.tar.gz -C /opt
chown root:root /opt/startup -R

cp /opt/startup/start-tty* /etc/init
cp /opt/startup/etc_sysconfig_init /etc/sysconfig/init
rm /tmp/startup.tar.gz

service mapr-warden stop
service mapr-zookeeper stop
[ -f /opt/mapr/initscripts/mapr-warden-patched ] && \
	cp /opt/mapr/initscripts/mapr-warden-patched /etc/init.d/mapr-warden

rpm -iv /tmp/mapr-patch-*.rpm
rm /tmp/mapr-patch-*.rpm

# Force a simple hostname ... we can't have a "*.local"
hostname maprdemo
sed -i "s/^HOSTNAME.*/HOSTNAME=maprdemo/" /etc/sysconfig/network

/opt/mapr/server/configure.sh -N demo.mapr.com -Z maprdemo -C maprdemo \
	-u mapr -g mapr -M7 --isvm 

/usr/sbin/makewhatis
${INSTALL_CMD}  lsof
${INSTALL_CMD}  python-sh

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

Val[0]="64"
Val[1]="64"
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

service mapr-zookeeper start
service mapr-warden start

mkdir /user

i=0
while [ "$i" -le "180" ]
do
  maprcli node cldbmaster 2> /dev/null
  if [ $? -eq 0 ]; then
    break
  fi

  echo "Waiting for CLDB to start up ($i seconds elapsed)..."
  sleep 5
  i=$[i+5]
done

#	Done automatically by latest installer 
# echo "localhost:/mapr /mapr soft,intr,nolock" >> /opt/mapr/conf/mapr_fstab
# mount localhost:/mapr /mapr
mkdir -p /user
echo "localhost:/mapr/demo.mapr.com/user /user soft,intr,nolock" >> /opt/mapr/conf/mapr_fstab
mount localhost:/mapr/demo.mapr.com/user /user

chmod a+r /opt/mapr/conf/mapr_fstab


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

maprcli acl edit -type cluster -user mapr:fc
maprcli volume create -name tables -replication 1 -path /tables
maprcli acl edit -type volume -name tables -user mapr:fc

yum install acpid
install_packages

# ${INSTALL_CMD} mapr-metrics

hadoop fs -mkdir /user/root

oozie_enabled
if [ $? -eq 0 ]; then
  hadoop fs -mkdir /oozie/share/lib
  hadoop fs -mkdir /oozie/examples
  tar -xvzf /opt/mapr/oozie/oozie-*/oozie-sharelib-*-mapr.tar.gz -C /tmp
  hadoop fs -put /tmp/share/lib/* /oozie/share/lib/
  tar -xvzf /opt/mapr/oozie/oozie-*/oozie-examples.tar.gz -C /tmp
  hadoop fs -put /tmp/examples/* /oozie/examples/

  hadoop fs -chown -R mapr:mapr /oozie
  hadoop fs -chmod -R 777 /oozie
fi

hue_enabled
if [ $? -eq 0 ]; then
  cp /opt/mapr/hue/hue-*/desktop/libs/hadoop/java-lib/hue-plugins-*.jar /opt/mapr/hadoop/hadoop*/lib/
  grep "<url-pattern>/hue/\*</url-pattern>" /opt/mapr/adminuiapp/webapp/WEB-INF/web.xml > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    sed -i -e "s#<url-pattern>/index/\*</url-pattern>#<url-pattern>/mcs/*</url-pattern>\
      </servlet-mapping>\
      <servlet-mapping>\
        <servlet-name>com.mapr.adminuiapp.http.vm_jsp</servlet-name>\
        <url-pattern>/index/*</url-pattern>\
      </servlet-mapping>\
      <servlet-mapping>\
        <servlet-name>com.mapr.adminuiapp.http.hue_jsp</servlet-name>\
        <url-pattern>/hue/*</url-pattern>#" /opt/mapr/adminuiapp/webapp/WEB-INF/web.xml
  fi

  sed -i -e "s/mapr.webui.https.port=8443/mapr.webui.http.port=8443/g" /opt/mapr/conf/web.conf
  hadoop fs -mkdir /user/hive/warehouse
fi

for user in user01 user02 hbaseuser mruser; do
  useradd -d /user/$user -p `openssl passwd -1 $user` -g mapr -m $user
done
