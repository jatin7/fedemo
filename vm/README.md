# VM

VM Generation
* Variables
  - If the eco system package variable is set to empty string "" then the latest packages are picked up
  - If the eco system pacakge variable is set to "0" then the package is skipped from the installation
  - If the eco system package variable is set to a value other than the above, that specific version of the package is installed

* Generate a CentOS Base Image 
  `packer build --only=base --var 'mapr_hue_version=""' --var 'mapr_hbase_version=""' --var 'mapr_pig_version=""' --var 'mapr_oozie_version=0' --var 'mapr_hcatalog_version=0' --var 'mapr_flume_version=0' --var 'mapr_hive_version=0.12.24975-1' --var 'mapr_mahout_version=0' --var 'mapr_version=3.0.3' --var 'mapr_core_repo_url=http://package.mapr.com/releases' --var 'mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem' mapr-sandbox.json`

* Generate a Demo VM Image using the base image created in the first step (Installs the MapR Core)
  `packer build --only=sandbox-base --var 'mapr_hue_version=""' --var 'mapr_hbase_version=""' --var 'mapr_pig_version=""' --var 'mapr_oozie_version=0' --var 'mapr_hcatalog_version=0' --var 'mapr_flume_version=0' --var 'mapr_hive_version=0.12.24975-1' --var 'mapr_mahout_version=0' --var 'mapr_version=3.0.3' --var 'mapr_core_repo_url=http://package.mapr.com/releases' --var 'mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem' mapr-sandbox.json`

* Generate a Demo VM Image using the Sandbox Base Image create in the above step
  `packer build --only=sandbox --var 'mapr_hue_version=""' --var 'mapr_hbase_version=""' --var 'mapr_pig_version=""' --var 'mapr_oozie_version=0' --var 'mapr_hcatalog_version=0' --var 'mapr_flume_version=0' --var 'mapr_hive_version=0.12.24975-1' --var 'mapr_mahout_version=0' --var 'mapr_version=3.0.3' --var 'mapr_core_repo_url=http://package.mapr.com/releases' --var 'mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem' mapr-sandbox.json`
  
VM Generation for Vertica
* (Same as above) Install packer
  Download and install appropriate package from http://www.packer.io/

* (Same as above) Install VirtualBox
  Download and install appropriate package from https://www.virtualbox.org/wiki/Downloads
  
* (Same as above) Generate a base image
  `packer build -only=base mapr-sandbox.json`

* (Same as above) Download the core file. This is an optimization step so we do not need
  to download it every time we build the package (Not needed for MapR 3.0.3)
  `wget -O mapr-core-3.1.0.x86_64.rpm http://package.mapr.com/releases/v3.1.0/redhat/mapr-core-3.1.0.23703.GA-1.x86_64.rpm`

* (Same as above) Generate a MapR Demo VM Image using the base image created in the first step
  `packer build -only=virtualbox-iso mapr-demovm.json`



* Download the Vertica RPM. You will need to log in to get the binary.
  https://my.vertica.com/download-community-edition/

* Name the binary vertica.rpm

* Generate a Vertica & MapR Demo VM Image using the base image created in the previous step
  `packer build -only=vertica mapr-vertica-demovm.json`

  
