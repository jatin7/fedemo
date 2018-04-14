#!/bin/bash -ex

rm -rf output-base output-sandbox*

SBPARAMS="
--var mapr_drill_version=0
--var mapr_flume_version=0
--var mapr_hbase_version=
--var mapr_hcatalog_version=0
--var mapr_hive_version=0
--var mapr_hue_version=0
--var mapr_kafka_version=
--var mapr_mahout_version=0
--var mapr_oozie_version=0
--var mapr_pig_version=0
--var mapr_spark_version=0
--var mapr_sqoop_version=0
--var mapr_storm_version=0
--var mapr_version=6.0.0
--var hadoop_version=2.7.0
--var mapr_core_repo_url=http://archive.mapr.com/releases/v6.0.0/redhat
--var mapr_eco_repo_url=http://archive.mapr.com/releases/MEP/MEP-4.1.1
--var mapr_banner_url=https://%s:8443/
--var mapr_banner_name=MapR-Demo-6.0
mapr-sandbox-6.0.0.json
"

echo "SBPARAMS=${SBPARAMS}"

packer build --only=base ${SBPARAMS}
packer build --only=sandbox-base ${SBPARAMS}
packer build --only=sandbox ${SBPARAMS}
#packer build --only=sandbox-vmware ${SBPARAMS}
