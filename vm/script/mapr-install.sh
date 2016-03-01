#!/bin/bash -eux

yum install -y vim-enhanced wget man gzip bzip2 tar zip unzip traceroute lynx elinks colordiff rsync

# wget http://yum.qa.lab/mapr-installer-multi/mapr-setup -O /root/mapr-setup
wget http://package.mapr.com/releases/v5.1.0/redhat/mapr-setup -O /root/mapr-setup

bash /root/mapr-setup

echo "Modifying hosts file"
sed -i 's/localhost/maprdemo maprdemo.local localhost/' /etc/hosts

cd /opt/mapr-installer

cat > /root/config.sandbox << EOF
[Control_Nodes]
maprdemo
[Data_Nodes]
[Client_Nodes]
[Options]
MapReduce1 = false
YARN = ${INSTALL_YARN}
HBase = false
MapR-DB = ${INSTALL_MAPRDB}
ControlNodesAsDataNodes = true
WirelevelSecurity = false
LocalRepo = false
[Defaults]
ClusterName = demo.mapr.com
User = mapr
Group = mapr
Password = mapr
UID = 2000
GID = 2000
Disks = /dev/sdb
StripeWidth = 3
ForceFormat = false
CoreRepoURL = ${MAPR_CORE_REPO_URL}
EcoRepoURL = ${MAPR_ECO_REPO_URL}
Version = ${MAPR_CORE_VERSION}
MetricsDBHost = 
MetricsDBUser =
MetricsDBPassword =
MetricsDBSchema =

EOF

cat /root/config.sandbox

yum install -y http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

bash /opt/mapr-installer/bin/install --skip-checks --password mapr --cfg /root/config.sandbox --quiet --user root --debug new
echo "Install Done!"

echo "=== Getting license... ==="
ID=`maprcli license showid -noheader`
wget --no-check-certificate -O /tmp/license.txt "http://ec2-54-161-85-25.compute-1.amazonaws.com:8080/licensegenerator/api/license?clusterid=${ID}&customerid=Mapr&downloadid=&issuer=&Email=&type=m5&partnerName=&numnodes=3&numdays=731&modules=hadoop,database,streams"
maprcli license add -is_file true -license /tmp/license.txt
echo "=== Finished getting license... ==="
service mapr-nfsserver restart

yum install -y mysql-server
yum install -y mapr-metrics

# For somereason warden can't determine hostname
# sed -i 's|/bin/hostname --fqdn|echo `/bin/hostname --fqdn`|g' /etc/init.d/mapr-warden

# MAPR-14418
echo "cldb.demo.vm=true" >> /opt/mapr/conf/cldb.conf
