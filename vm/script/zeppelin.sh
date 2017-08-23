#!/bin/bash

#
# Install prerequitsites

yum install git npm -y

# Install Apache Maven
wget -O - http://www-us.apache.org/dist/maven/maven-3/3.5.0/binaries/apache-maven-3.5.0-bin.tar.gz | tar xvfz - -C /opt

#
# Install Zeppelin - current snapshot
cd /tmp
git clone https://github.com/apache/incubator-zeppelin.git
cd /tmp/incubator-zeppelin
# export MAPR_MAVEN_REPO=http://repository.mapr.com/maven
/opt/apache-maven-3.3.9/bin/mvn -Pmapr51 -Pyarn -Pbuild-distr -Phadoop-2.6 package -DskipTests -B
tar xvfz /tmp/incubator-zeppelin/zeppelin-distribution/target/zeppelin-0.7.0-SNAPSHOT.tar.gz -C /opt
# Remove the source directories to free space on the boot drive
rm -rf /tmp/incubator-zeppelin ~/.m2 ~/.cache ~/.npm

exit 0
