# A set of packer definition files (*.json) and some utility scripts
# to aid in the generation of Sandbox environments for MapR.
#

#	Prerequisites 
#	-------------

Download and install appropriate flavor of "packer" package 
from http://www.packer.io/.   Make sure the utility is in your PATH.

If you are using OSX you can install via `homebrew`

    brew tap homebrew/binary
    brew install packer

Download and install VirtualBox for your platform from  
https://www.virtualbox.org/wiki/Downloads


#	Overview
#	--------

The VM generation is done in stages, so as to enable customization
at any point.   The stages are:

  1. Base : the operating system only
  2. Sandbox-Base : Base plus the initial installation of MapR Software
  3. Sandbox : Final VM version, with customizations

The input for the process is a packer definition file (usually a
json document).  The different phases are defined there.

Additional environment variables can also be specified in the .json 
file, for use during the execution of customization scripts.

For this version, separate variables are available for the different
MapR ecosystem components.  These variables are used during the
final sandbox step.

  * If the eco system package variable is set to empty string "" 
    then the latest packages are picked up
  * If the eco system pacakge variable is set to "0",  then the package 
    is not included in the final customized sandbox
  * If the eco system package variable is set to a non-empty, 
    non-"0" value, that specific version of the package is installed


#	Examples
#	--------
Note: the mapr-sandbox.json script by default will not install any components except mapr-hbase and mapr-streams.  Use the --var switch to override

Step 1. Generate a CentOS Base Image with MapR 5.1.0 
  
`packer build --only=base --var 'mapr_version=5.1.0' --var 'mapr_core_repo_url=http://package.mapr.com/releases' --var 'mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem-5.x' mapr-sandbox.json`

Step 2. Add the MapR core software to the vm created in step 1  
  
`packer build --only=sandbox-base --var 'mapr_version=5.1.0' --var 'mapr_core_repo_url=http://package.mapr.com/releases' --var 'mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem-5.x' mapr-sandbox.json`

Step 3. Generate a fully functional Sandbox using the sandbox-base from step 2  
  
`packer build --only=sandbox --var 'mapr_version=5.1.0' --var 'mapr_core_repo_url=http://package.mapr.com/releases' --var 'mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem-5.x' mapr-sandbox.json`

Each step creates a new directory for the resultant Virtual Machine image.

Alternative:
run the 'build_5.1.0-base.sh which will process the 3 steps above

  
