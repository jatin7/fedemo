#!/bin/bash -ex

SBPARAMS="--var mapr_spark_version= --var mapr_hue_version=0 --var mapr_hbase_version=0 --var mapr_pig_version=0 --var mapr_oozie_version=0 --var mapr_hcatalog_version=0 --var mapr_flume_version= --var mapr_hive_version=0 --var mapr_mahout_version=0 --var mapr_drill_version=0 --var mapr_storm_version= --var mapr_sqoop_version=0 --var mapr_version=5.1.0 --var hadoop_version=2.7.0 --var mapr_core_repo_url=http://yum.qa.lab/MAPR-21965 --var mapr_eco_repo_url=http://package.qa.lab/releases/ecosystem-special --var mapr_banner_url=https://%s:8443/ --var mapr_banner_name=MapR-Sandbox-Converged-Data-Platform-Preview --var aggressive_deletions=true --var install_marlin=true"

echo "SBPARAMS=${SBPARAMS}"

#packer build --only=base ${SBPARAMS} mapr-sandbox-jsonmarlin.json
#packer build --only=sandbox-base ${SBPARAMS} mapr-sandbox-jsonmarlin.json
packer build --only=sandbox ${SBPARAMS} mapr-sandbox-jsonmarlin.json
packer build --only=sandbox-vmware ${SBPARAMS} mapr-sandbox-jsonmarlin.json

