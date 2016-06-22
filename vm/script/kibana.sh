#!/bin/bash

# 
# Start Warden
service mapr-zookeeper start
service mapr-warden start
#
# Install Kibana
# Import the gpg key from elastic.co
rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch
# Create the kibana yum repository
cat > /etc/yum.repos.d/kibana.repo << EOF
[kibana-4.4]
name=Kibana repository for 4.4.x packages
baseurl=http://packages.elastic.co/kibana/4.4/centos
gpgcheck=1
gpgkey=http://packages.elastic.co/GPG-KEY-elasticsearch
enabled=1

EOF
# Install Kibana
yum install kibana -y

# Configure Kibana
# Edit the /opt/kibana/config/kibana.yml file:
# 
sed -i 's|# elasticsearch.url: "http://localhost:9200"|elasticsearch.url: "http://maprdemo:9200"|g' /opt/kibana/config/kibana.yml

# Stop Warden
service mapr-warden stop
service mapr-zookeeper stop

exit 0
