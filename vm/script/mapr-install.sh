#!/bin/bash -eux

#wget http://yum.qa.lab/mapr-installer/mapr-setup -O /root/mapr-setup
wget http://package.mapr.com/releases/v3.1.0/redhat/mapr-setup -O /root/mapr-setup
bash /root/mapr-setup

tar -xvzf /tmp/startup.tar.gz -C /opt
chown root:root /opt/startup -R
#cp /opt/startup/repos_yum.yml /opt/mapr-installer/ansible/playbooks/
mv /opt/startup/start_services.yml.demovm /opt/mapr-installer/ansible/playbooks/start_services.yml

sed -i 's/configure.sh -N/configure.sh --isvm -N/' /opt/mapr-installer/ansible/playbooks/library/do_configure.sh

cat > /tmp/answers.txt << EOF
n

y
y
y
/dev/sdb
c
EOF

#cat > /tmp/answers.txt << EOF
#n
#
#y
#y
#y
#/dev/sdb
#m
#uc
#http://yum.qa.lab/v3.1.0
#ue
#http://yum.qa.lab/opensource
#cont
#c
#EOF

echo "Modifying hosts file"
sed -i 's/localhost/maprdemo maprdemo.local localhost/' /etc/hosts

cat /tmp/answers.txt | bash /opt/mapr-installer/bin/install
