#!/bin/bash -eux

wget http://yum.qa.lab/mapr-installer-multi/mapr-setup -O /root/mapr-setup

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
MapReduce = true
YARN = false
HBase = false
M7 = true
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
CoreRepoURL = ${MAPR_CORE_REPO_URL}
EcoRepoURL = ${MAPR_ECO_REPO_URL}
Version = ${MAPR_CORE_VERSION}
MetricsDBHost
MetricsDBUser
MetricsDBPassword
MetricsDBSchema
EOF

cat /root/config.sandbox

yum install -y http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm

bash /opt/mapr-installer/bin/install --password mapr --cfg /root/config.sandbox --quiet --user root --debug new
echo "Install Done!"

ID=`maprcli license showid -noheader`
wget -O /tmp/license.txt "http://ec2-107-22-211-26.compute-1.amazonaws.com:8080/licensegenerator/api/license?type=m7&numnodes=1&grace=30&numdays=730&clusterid=${ID}&customerid=Mapr+Demo+VM&partnerName="
maprcli license add -is_file true -license /tmp/license.txt
service mapr-nfsserver restart

#For somereason warden can't determine hostname
sed -i 's|/bin/hostname --fqdn|echo `/bin/hostname --fqdn`|g' /etc/init.d/mapr-warden
