# VM

VM Generation is a two step process.
* Generate a Base Image
  `packer build -only=virtualbox-iso mapr-demovm.json`

* Generate a Demo VM Image using the base image created in the first step
  `packer build -only=virtualbox-ovf mapr-demovm.json`
