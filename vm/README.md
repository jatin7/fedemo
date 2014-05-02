# VM

VM Generation
* Generate a Base Image
  `packer build -only=virtualbox-iso mapr-demovm.json`

* Generate a Demo VM Image using the base image created in the first step
  `packer build -only=virtualbox-ovf mapr-demovm.json`

  
VM Generation for Vertica
* (Same as above) Install packer
  Download and install appropriate package from http://www.packer.io/

* (Same as above) Install VirtualBox
  Download and install appropriate package from https://www.virtualbox.org/wiki/Downloads
  
* (Same as above) Generate a base image
  `packer build -only=virtualbox-iso mapr-demovm.json`

* (Same as above) Download the core file. This is an optimization step so we do not need
  to download it every time we build the package
  `wget -O mapr-core-3.1.0.x86_64.rpm http://package.mapr.com/releases/v3.1.0/redhat/mapr-core-3.1.0.23703.GA-1.x86_64.rpm`

* (Same as above) Generate a MapR Demo VM Image using the base image created in the first step
  `packer build -only=virtualbox-iso mapr-demovm.json`



* Download the Vertica RPM. You will need to log in to get the binary.
  https://my.vertica.com/download-community-edition/

* Name the binary vertica.rpm

* Generate a Vertica & MapR Demo VM Image using the base image created in the previous step
  `packer build -only=vertica mapr-vertica-demovm.json`

  