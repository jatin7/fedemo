#!/bin/bash -ex

SBPARAMS="--var mapr_spark_version=0 --var mapr_hue_version=0 --var mapr_hbase_version=0 --var mapr_pig_version=0 --var mapr_oozie_version=0 --var mapr_hcatalog_version=0 --var mapr_flume_version=0 --var mapr_hive_version=0 --var mapr_mahout_version=0 --var mapr_drill_version=0 --var mapr_sqoop_version=0 --var mapr_version=5.0.9 --var hadoop_version=2.7.0 --var mapr_core_repo_url=http://package.qa.lab/releases --var mapr_eco_repo_url=http://package.mapr.com/releases/ecosystem-5.x --var mapr_banner_url=https://%s:8443/ --var mapr_banner_name=MapR-Sandbox-For-MapR-DB-JSON-Dev-Preview --var aggressive_deletions=true"

echo "SBPARAMS=${SBPARAMS}"

packer build --only=base ${SBPARAMS} mapr-sandbox-jsonmarlin.json

packer build --only=sandbox-base ${SBPARAMS} mapr-sandbox-jsonmarlin.json

packer build --only=sandbox ${SBPARAMS} mapr-sandbox-jsonmarlin.json

packer build --only=sandbox-vmware ${SBPARAMS} mapr-sandbox-jsonmarlin.json
