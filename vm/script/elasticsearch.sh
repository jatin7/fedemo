#!/bin/bash

#
# Start Warden
service mapr-zookeeper start
service mapr-warden start
#
# Install Elasticsearch
# Import the gpg key from elastic.co
rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch
# Create the elasticsearch yum repository
cat > /etc/yum.repos.d/elasticsearch.repo << EOF
[elasticsearch-2.x]
name=Elasticsearch repository for 2.x packages
baseurl=https://packages.elastic.co/elasticsearch/2.x/centos
gpgcheck=1
gpgkey=https://packages.elastic.co/GPG-KEY-elasticsearch
enabled=1

EOF
# Install Elasticsearch
yum install elasticsearch -y

# Configure Elasticsearch
# (Source: https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-configuration.html)
# Edit the /etc/elasticsearch/elasticsearch.yml file:
# 
sed -i 's|# cluster.name: my-application|cluster.name: esdemo|g' /etc/elasticsearch/elasticsearch.yml
sed -i 's|# node.name: node-1|node.name: ${HOSTNAME}|g' /etc/elasticsearch/elasticsearch.yml
sed -i 's|# path.data: /path/to/data|path.data: /mapr/demo.mapr.com/elasticsearch/${HOSTNAME}/data|g' /etc/elasticsearch/elasticsearch.yml
sed -i 's|# path.logs: /path/to/logs|/path.logs: /mapr/demo.mapr.com/elasticsearch/${HOSTNAME}/logs|g' /etc/elasticsearch/elasticsearch.yml
sed -i 's|# network.host: 192.168.0.1|network.host: _site_|g' /etc/elasticsearch/elasticsearch.yml
# Create the volume for use with Elasticsearch
sudo -u mapr maprcli volume create -name elasticsearch.`hostname` -path /elasticsearch/`hostname` -localvolumehost `hostname` -replication 1 -createparent true
# Create the data and logs directories under the new volume
hadoop fs -mkdir /elasticsearch/`hostname`/data /elasticsearch/`hostname`/logs
# Change the ownership to the 'elasticsearch' user
hadoop fs -chown -R elasticsearch:elasticsearch /elasticsearch

# Stop Warden
service mapr-warden stop
service mapr-zookeeper stop
exit 0
