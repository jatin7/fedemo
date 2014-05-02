#!/bin/bash

echo Waiting for MapR Services to Start before configuring
# wait for CLDB service to be running
while [ `maprcli node list | wc -l` -lt 2 ]; do
   sleep 1
done


rpm -i /tmp/vertica.rpm
/opt/vertica/sbin/install_vertica --hosts `hostname` --dba-user-password-disabled --failure-threshold NONE --accept-eula --license CE

chkconfig vertica_agent off
chkconfig verticad off
cp -d /etc/init.d/verticad /opt/mapr/initscripts
cat > /etc/sudoers.d/mapr-vertica_conf <<DELIM
mapr ALL=(root) NOPASSWD:/opt/mapr/initscripts/vertica_wrapper,/opt/vertica/sbin/verticad
Defaults!/opt/mapr/initscripts/vertica_wrapper !requiretty
Defaults!/opt/vertica/sbin/verticad !requiretty
DELIM

cat > /opt/mapr/initscripts/vertica_wrapper <<DELIM
#!/bin/bash
/usr/bin/sudo /opt/mapr/initscripts/verticad $*
exit $?
DELIM

chmod +x /opt/mapr/initscripts/vertica_wrapper


cat > /opt/mapr/conf/conf.d/warden.HPVertica.conf <<DELIM
services=HPVertica:all:nfs
service.displayname="HPVertica"
service.command.start=/opt/mapr/initscripts/vertica_wrapper start
service.command.stop=/opt/mapr/initscripts/vertica_wrapper stop
service.logs.location=/vertica/data/catalog
service.command.type=BACKGROUND
service.command.monitorcommand=/opt/mapr/initscripts/vertica_wrapper status
service.depends.local=1
service.heapsize.percent=50
service.heapsize.min=2000
DELIM

chown mapr:mapr /opt/mapr/conf/conf.d/warden.HPVertica.conf

maprcli volume create -name vertica -path /vertica
maprcli acl edit -type volume -name vertica -user dbadmin:fc


MAPR_HOSTNAME=`maprcli node list -columns hostname -noheader | awk '{print $1}'`

# create the data volume
maprcli volume create -name vertica.$MAPR_HOSTNAME.data -path /vertica/$MAPR_HOSTNAME/data -createparent true -localvolumehost $MAPR_HOSTNAME -replication 1

# create the temp volume
maprcli volume create -name vertica.$MAPR_HOSTNAME.tmp -path /vertica/$MAPR_HOSTNAME/tmp -createparent true -localvolumehost $MAPR_HOSTNAME -replication 1

# set permissions on the data volume
maprcli acl edit -type volume -name vertica.$MAPR_HOSTNAME.data -user dbadmin:fc
maprcli acl edit -type volume -name vertica.$MAPR_HOSTNAME.tmp -user dbadmin:fc

# disable MapR compression
hadoop mfs -setcompression off /vertica/$MAPR_HOSTNAME/data
hadoop mfs -setcompression off /vertica/$MAPR_HOSTNAME/tmp

hadoop fs -chown -R dbadmin:verticadba /vertica
mkdir /vertica
chown dbadmin:verticadba /vertica


sudo -u mapr echo localhost:/mapr/my.cluster.com/vertica/$MAPR_HOSTNAME /vertica nolock,hard >> /opt/mapr/conf/mapr_fstab

mount localhost:/mapr/my.cluster.com/vertica/$MAPR_HOSTNAME /vertica



sudo -u dbadmin /opt/vertica/bin/admintools -t create_db -c /vertica/data/catalog -D /vertica/data/files -s $MAPR_HOSTNAME -d example 

sudo -u dbadmin /opt/vertica/bin/vsql -c "alter resource pool general maxmemorysize '50%'"

sudo -u dbadmin /opt/vertica/bin/vsql -q -t -A -c "
Select  E'select add_location(\'/vertica/tmp/'
        || database_name || '/'
        || node_name
        || E'_tmp\',\''
        || node_name
        || E'\',\'TEMP\');'
  from nodes cross join databases" > /tmp/locations.sql

sudo -u dbadmin /opt/vertica/bin/vsql -q -t -A -c "
select E'select alter_location_use(\'/vertica/data/files/'
        || database_name || '/'
        || node_name
        || E'_data\',\''
        || node_name
        || E'\',\'DATA\');'
  from storage_locations cross join databases
  where location_usage ilike 'DATA,TEMP' " >> /tmp/locations.sql

sudo -u dbadmin /opt/vertica/bin/vsql -q -f /tmp/locations.sql

sudo -u dbadmin /opt/vertica/bin/admintools -t stop_db -d example


chmod +x /opt/mapr/start_vertica.sh
echo /opt/mapr/start_vertica.sh >> /etc/rc.d/rc.local

