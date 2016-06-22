#!/bin/bash

# Script to install common build and deployment tools: git, npm, mvn, docker
#

#
# Install Git and dependencies
#

yum install -y \
  git \
  npm \
;

# Install Apache Maven
#
wget -O - http://www-us.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz | tar xvfz - -C /opt

# Configure maven
#
cat > /etc/profile.d/mvn.sh << EOF
export PATH=/opt/apache-maven-3.3.9/bin:$PATH
EOF

# Configure the Docker yum repository
#
cat > /etc/yum.repos.d/docker.repo << EOF
[dockerrepo]
name=Docker Repository
baseurl=https://yum.dockerproject.org/repo/main/centos/6/
enabled=1
gpgcheck=1
gpgkey=https://yum.dockerproject.org/gpg
EOF

# Install the latest Docker
#
yum install -y docker-engine

# Disable Docker from autostarting
#
/sbin/chkconfig --level 345 docker off

# Clean up the yum cache
#
yum clean all

exit 0
