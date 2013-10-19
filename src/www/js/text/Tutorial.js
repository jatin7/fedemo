/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
 noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
 strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global define:true*/

(function () {
    "use strict"
    MAPR.Text = MAPR.Text || {};
    var img = function (img) {
        return "<img src='images/vm/" + img + ".png'>";

    };

    MAPR.Text.Tutorial = [
        {
            desc: "Introducing MapR's Hadoop VM",
            text: [
                {
                    desc: "The MapR Virtual Machine is a fully-functional single-node cluster capable of running MapReduce" +
                        "programs and working with applications like Hive and Pig. You can try the MapR Virtual Machine on" +
                        "nearly any 64-bit computer. When you run the MapR virtual machine, you'll experience the MapR" +
                        "Control System and HUE graphical interfaces running on the MapR File System (MapR-FS). The MapR-" +
                        "FS is a fully read-write distributed file system that allows applications to concurrently read and write" +
                        "directly to disk."
                },

                {
                    desc: "Use the information and tutorials included in the MapR VM to discover the MapR Control System and" +
                        "components included in the HUE interface. The tutorials provided within the MapR VM are intended to" +
                        "guide you through some basic administrator and developer procedures you might perform on a cluster." +
                        "You can also use the virtual machine environment to explore solutions for your own use cases and run" +
                        "jobs on your data."
                },

                {
                    desc: "If you decide you would like to experience more of MapR, <a target='_blank' href='http://www.mapr.com/products/download'>" +
                        "download and test drive a free version</a> of " +
                        "MapR's distribution for Hadoop. You'll see how easy, fast and dependable true enterprise-grade Hadoop" +
                        "can be and learn why more companies with mission-critical requirements are choosing MapR."
                },

                {
                    desc: "If you are interested in learning more about MapR, Hadoop, and MapReduce <a href='http://www.mapr.com/academy/' target='_blank'>visit MapR Academy</a> and" +
                        "watch the informative videos posted on the site. MapR also provides instructor led and web-based" +
                        "training if you decide you want to learn about MapR and its unique offerings in greater depth."
                }
            ]
        },
        {
            desc: "Explore the MCS in the MapR Hadoop VM",
            text: "The MapR Control System (MCS) is a complete graphical, programmatic control panel for cluster administration that provides all of the functionality of the command line. The MCS provides job monitoring metrics and helps you troubleshoot issues, such as which jobs required the most memory in a given week or which events caused job and task failures. Use the MCS to access, monitor, and perform administrative tasks on your cluster.",
            std: [
                {
                    desc: "Dashboard View",
                    text: [
                        {
                            desc: "When you first login to the MCS, you see the Dashboard view. The Dashboard provides a summary of information about the cluster including a cluster heat map that displays the health of each node; an alarms summary; cluster utilization that shows the CPU, memory, and disk space usage; services running across the cluster; the number of available, unavailable, and under replicated volumes; MapReduce jobs."
                        },
                        {
                            img: "MCS_DashboardView"
                        }
                    ]
                },
                {
                    desc: "Cluster Heat Map",
                    text: [
                        {
                            desc: "The Cluster Heat Map is the first panel in the Dashboard view. It displays color coded squares that represent nodes in a cluster. The color of the square indicates node health. A green node indicates that a node is in good health, whereas red indicates that a node requires immediate attention."
                        },
                        {
                            img: "cluster_heatMap"
                        }
                    ],
                    std: [
                        {
                            desc: "Explore the Heat Map",
                            ul: [
                                {
                                    desc: "Use the zoom slider in the tool bar to expand the node and see specific node details.",
                                    text: [
                                        {
                                            img: "zoom_slider"
                                        },
                                        {
                                            desc: "You can use the filters in the tool bar to select which node details display. For example, you can filter by memory utilization and all nodes using 80% or more of their available memory display in the dashboard in red. You can also sort nodes by rack, name, or status."
                                        }
                                    ]
                                },
                                {
                                    desc: "Click on the node to view node details. A new view opens displaying the details. Expand and collapse the panels.",
                                    text: [
                                        {
                                            img: "NodeDetails"
                                        }
                                    ]
                                },
                                {
                                    desc: "Click the Dashboard tab to return to the Dashboard view."
                                },
                                {
                                    desc: "Click " + img("Wrench_Icon") + " to view Heat Map controls and the node color legend.",
                                    text: [
                                        {
                                            img: "HeatMap"
                                        },
                                        {
                                            desc: "The color statuses and descriptions listed in the legend indicate what the health of the node would be if it changed from green to any of the colors shown."
                                        }
                                    ]
                                },

                                {
                                    desc: "Adjust the refresh rate to set how often the MCS refreshes the displayed cluster data."
                                },
                                {
                                    desc: "Change the column count to set how many columns of nodes the MCS displays in a rack. If you have many nodes in a cluster and you want to see all the nodes in the cluster with a critical status, you can filter by the word 'critical' and the MCS displays all the nodes in the cluster that require immediate attention."
                                },
                                {
                                    desc: "Click " + img("Wrench_Icon") + " to close the Heat Map control panel."
                                }

                            ]
                        }
                    ]
                },
                {

                    desc: "Cluster Utilization, Jobs, Services, Volumes",
                    text: "In the panels to the right of the Heat Map, you can see cluster utilization, MapReduce jobs, services running across the cluster, as well as mounted and unmounted volumes in the cluster. You can click on multiple links in the panels for more details about the cluster and nodes.",
                    std: [
                        {
                            desc: "Explore Cluster Utilization",
                            ul: [
                                {
                                    desc: "View how much CPU, memory, and disk space the cluster is using.",
                                    text: [
                                        {
                                            img: "ClusterUtilization"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            desc: "Explore Jobs",
                            ul: [
                                {
                                    desc: "Notice the links for running and queued jobs, and for blacklisted nodes.",
                                    text: [
                                        {
                                            img: "MapReduce"
                                        }
                                    ]
                                },
                                {
                                    desc: "Click any of these links. A new tab displays the JobTracker view. When you run MapReduce jobs, this view displays a list of running jobs and queued jobs, as well as nodes that get blacklisted. The system blacklists nodes when they do not heartbeat back to the master node for several seconds. The system assumes the node cannot perform tasks."
                                }
                            ]
                        },

                        {
                            desc: "Explore Services",
                            ul: [
                                {
                                    desc: "View the services running in the cluster.",
                                    text: [
                                        {
                                            img: "Services"
                                        }
                                    ]
                                },
                                {
                                    desc: "Click any of the service links to see nodes running that particular service."
                                }
                            ]
                        },
                        {
                            desc: "Explore Mounted and Unmounted Volumes",
                            ul: [
                                {
                                    desc: "View the number of mounted and unmounted volumes in the cluster.",
                                    text: [
                                        {
                                            img: "Volumes"
                                        }
                                    ]
                                },
                                {
                                    desc: "Click either of the volumes links. A new tab displays the Volumes view. The Volumes view displays a list of mounted or unmounted volumes with volume information, like where each volume is mounted and its physical topology."
                                }
                            ]
                        }

                    ]
                },
                {

                    desc: "Navigation Panel",
                    text: "The Navigation panel provides links to views that enable cluster monitoring, management, and configuration.",
                    std: [
                        {
                            desc: "Explore the Navigation Panel",
                            ul: [
                                {
                                    desc: "Click on any view in the Navigation panel and explore the options.",
                                    text: [
                                        {
                                            img: "NavigationPane"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }


            ]
        }, // End navigation
        {
            desc: "Getting Started in the MapR Control System",
            text: [
                {
                    desc: "Now that you are familiar with the MapR Control System interface, let's walk through some procedures that you would perform after you install MapR and your cluster is running. The following procedures are important to ensure your cluster runs smoothly:"
                },
                {
                    bullet: "Adding a license"
                },

                {
                    bullet: "Setting up topology"
                },
                {
                    bullet: "Creating volumes"
                },
                {
                    bullet: "Configuring notifications and alarms"
                },
                {
                    bullet: "Reviewing job metrics"
                }
            ],
            std: [
                {
                    desc: "MapR License Management",

                    text: [
                        {
                            desc: "The first step in configuring a new MapR cluster is to apply a license. You can easily apply a license from the MapR Control System. When you select a license, choose one that meets your needs:"
                        },
                        {
                            bullet: "M3-Free edition, with unlimited scale, full Hadoop capability and single-point NFS"
                        },
                        {
                            bullet: "M5-Supported edition, offering high availability, multiple NFS nodes, and data management"
                        },
                        {
                            bullet: "M7-All of the above plus native MapR Tables"
                        },
                        {
                            bullet: "If you do not apply even the free M3 license, you cannot take advantage of features like NFS. You can see a complete listing of the features available with each license on the <a href='http://www.mapr.com/products/mapr-editions' target='_blank'>MapR Editions</a> page."
                        }
                    ],
                    ul: [
                        {
                            desc: "Adding a License",
                            text: "To add a MapR license:",

                            ol: [
                                {
                                    desc: "Click the <strong>Manage Licenses</strong> link in the top right corner of the MapR Control System screen.",
                                    text: [
                                        {
                                            desc: "<strong>Note:</strong> You do not need to apply a license in the virtual machine, however should you install a trial or purchased version of MapR, you will need to apply a product license."
                                        },
                                        {
                                            img: "LicenseConfig"
                                        }
                                    ]
                                },
                                {
                                    desc: "Select any of the three methods listed to add the license."
                                },
                                {
                                    desc: "Enter the license and click Apply Licenses.",
                                    text: "<strong>Note:</strong> The system raises an alarm several days prior to license expiration."
                                }
                            ]
                        }
                    ]
                },
                {
                    desc: "Topology",
                    text: [
                        {
                            desc: "Topology is a description of the physical layout of the cluster hardware, so that MapR knows which nodes are on different racks. When your data is replicated, the copies go to separate racks. That way, if an entire rack goes down, you don't lose access to your data. Topology is a description of the locations of racks and nodes."
                        },
                        {
                            img: "NodeTopology"
                        },

                        {
                            desc: "The diagram above shows a cluster with three racks, labeled \"rack1\",  \"rack2\", and \"rack3.\" Each rack has eight nodes, labeled \"node1\", \"node2\", \"node3\", and so on. To describe the cluster using the terms of physical topology, we use the following guidelines:"
                        },
                        {
                            bullet: "All the racks are inside the enclosing topology /data."
                        },
                        {
                            bullet: "Each node is inside its rack."
                        },
                        {
                            bullet: "Any given node can only be in one topology."
                        },
                        {
                            desc: "So, in the above example, the node \"node2\"  on rack \"rack1\" would have the following topology:"
                        },

                        {
                            desc: "/data/rack1/node2"
                        }
                    ],
                    ol: [
                        {
                            desc: "Setting Topology",
                            text: "Setting up the cluster's physical topology is an important step—not only does it help protect your data in case of a rack failure, it also enables data placement and job placement features. For more information, see <a href='http://www.mapr.com/doc/display/MapR/Node+Topology' target='_blank'>Node Topology</a>. ",
                            ol: [
                                {
                                    desc: "From the Dashboard view, click Nodes to see the Nodes view.",
                                    text: [
                                        {
                                            img: "SettingTopology"
                                        }
                                    ]
                                },
                                {
                                    desc: "Select the checkboxes for all the nodes on a single rack."
                                },
                                {
                                    desc: "Click Change Topology to set up a label that describes the rack."
                                }
                            ]
                        }
                    ]

                },
                {
                    desc: "Volumes",
                    text: [
                        {
                            desc: "A volume is a logical unit that you create to organize data into groups so that you can manage your data and apply policy all at once instead of file by file. The volume structure defines how data is distributed across the nodes in your cluster."
                        },
                        {
                            desc: "You can create volumes for each user, department, or project. Volumes can enforce disk usage limits, set replication levels, establish ownership and accountability, and measure the cost generated by different projects or departments."
                        },
                        {
                            desc: "Configure volumes as soon as you can after getting your cluster up and running. Putting all your data in the cluster without organizing it into volumes can lead to headaches later. It is important to create many volumes for data storage and to select your choice of volumes strategically for management. Volumes are easily created, named, and their mount path designated from the MapR Control System (MCS)."
                        },
                        {
                            desc: "Volumes empower the following data management features that MapR provides:"
                        },

                        {
                            bullet: "<strong>Volume topology</strong> lets you specify a subset of cluster nodes that a volume is allowed to use, for data placement (see <a href='http://www.mapr.com/doc/display/MapR/Managing+Data+with+Volumes' target='_blank'>Setting Volume Topology</a>)."
                        },
                        {
                            bullet: "<strong>Snapshots</strong> let you preserve the state of a volume at a particular point in time (see <a href='http://www.mapr.com/doc/display/MapR/Snapshots' target='_blank'>Snapshots</a>)."
                        },
                        {
                            bullet: "<strong>Mirrors</strong> let you create read-only copies of a volume for load-balancing, separation of development from production, or backup (see <a href='http://www.mapr.com/doc/display/MapR/Mirror+Volumes' target='_blank'>Mirror Volumes</a>)."
                        },
                        {
                            desc: "A MapR cluster comes with certain system volumes out of the box. The following diagram shows the system volumes (blue) along with recommended volumes that you should add to your new cluster."
                        },
                        {
                            img: "SystemRootVolumeConfig"
                        },
                        {
                            desc: "The root volume (mapr.cluster.root, mounted at /) contains the mount points for the other volumes. MapR provides a volume for HBase (if installed) and a /var/mapr volume containing information about cluster configuration. There is also a local volume for each node—limited by its topology to reside only on its own node."
                        },
                        {
                            desc: "As shown in the example above, you should add a hierarchy of volumes for users, projects and departments, to enable you to manage data for these different entities separately."
                        }
                    ],
                    std: [
                        {
                            desc: "Creating Volumes",
                            text: "To create a volume in the MapR Control System,",
                            ol: [
                                {
                                    desc: "Click <strong>Volumes</strong> in the Navigation panel."
                                },
                                {
                                    desc: "Click <strong>New Volume</strong>.",
                                    text: [
                                        {
                                            img: "CreateNewVolume"
                                        }
                                    ]
                                },
                                {
                                    desc: "Specify volume settings:",
                                    text: [
                                        {
                                            bullet: "<strong>Volume Setup</strong>: Set the name and mount path of the volume. The mount path determines where the volume will be mounted. Following the above volume layout diagram, you might create a volume called johnsmith with a mount path of /users/jsmith for example. You can also set volume topology here (default is /data of course, to use all racks), and choose whether to create a normal read/write volume or a mirror volume."
                                        },
                                        {
                                            bullet: "<strong>Permissions</strong>: Set the permissions, for each user, for volume operations such as backing up or deleting the volume."
                                        },
                                        {
                                            bullet: "<strong>Usage Tracking</strong>: Set a quota, if desired, to limit the maximum size of the volume. The hard quota is a limit above which writes to the volume are disabled; the advisory quota is a limit above which a warning is sent to the volume’s owner."
                                        },
                                        {
                                            bullet: "<strong>Replication</strong>: Set the desired replication and the replication method for the volume."
                                        },
                                        {
                                            desc: "For more information on what these settings mean, see <a href='http://doc.mapr.com/display/MapR/Managing+Data+with+Volumes' target='_blank'>Managing Data with Volumes</a>."
                                        }
                                    ]
                                }
                            ]
                        }

                    ]


                },
                {


                    desc: "Snapshots",
                    text: "A snapshot is a read-only image of a volume at a specific point in time. Snapshots are useful any time you need to roll back to a known good data set at a specific point in time. You can create a snapshot manually or automate the process with a schedule. If you want to automate the snapshot with a schedule, you first need to configure schedule details.",

                    ul: [

                        {
                            desc: "Creating Snapshots Manually",
                            text: "To create a snapshot:",
                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the <strong>MapR-FS</strong> group and click the Volumes view."
                                },
                                {
                                    desc: "Select the checkbox beside the name of each volume for which you want a snapshot, then click the New Snapshot button to display the Snapshot Name dialog."
                                },
                                {
                                    desc: "Type a name for the new snapshot in the Name... field."
                                },
                                {
                                    desc: "Click OK to create the snapshot."
                                }
                            ]
                        },
                        {
                            desc: "Creating Snapshot Schedules",
                            text: "Configure schedule details:",
                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the <strong>MapR-FS</strong> group and click the Schedules view."
                                },
                                {
                                    desc: "Click <strong>New Schedule</strong>."
                                },
                                {
                                    desc: "Type a name for the new schedule in the <strong>Schedule Name</strong> field."
                                },
                                {
                                    desc: "Define one or more schedule rules in the <strong>Schedule Rules</strong> section:"
                                },
                                {
                                    desc: "From the first dropdown menu, select a frequency (Once, Yearly, Monthly, etc.))"
                                },
                                {
                                    desc: "From the next dropdown menu, select a time point within the specified frequency. For example: if you selected Monthly in the first dropdown menu, select the day of the month in the second dropdown menu."
                                },
                                {
                                    desc: "Continue with each dropdown menu, proceeding to the right, to specify the time at which the scheduled action is to occur."
                                },
                                {
                                    desc: "Use the <strong>Retain For</strong> field to specify how long the data is to be preserved. For example: if the schedule is attached to a volume for creating snapshots, the Retain For field specifies how far after creation the snapshot expiration date is set."
                                },
                                {
                                    desc: "Click <strong>[ + Add Rule ]</strong> to specify additional schedule rules, as desired."
                                },
                                {
                                    desc: "Click <strong>Save Schedule</strong> to create the schedule."
                                }

                            ]
                        },
                        {
                            desc: "How to schedule a snapshot",
                            text: "Scheduling snapshots: ",
                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the MapR-FS group and click the Volumes view."
                                },
                                {
                                    desc: "Display the Volume Properties dialog by clicking the volume name, or by selecting the checkbox beside the name of the volume then clicking the Properties button."
                                },
                                {
                                    desc: "In the Snapshot Scheduling section, choose a schedule from the Snapshot Schedule dropdown menu."
                                },
                                {
                                    desc: "Click OK to save changes to the volume."
                                }

                            ]


                        } // End Schedule


                    ] // End Snapshot array of items

                }, // End Snapshots
                {

                    desc: "Mirror Volumes",
                    text: "A mirror volume is a read-only physical copy of a source volume. You can use mirror volumes in the same cluster (local mirroring) to provide local load balancing. Local mirror volumes can serve read requests for the most frequently accessed data in the cluster. You can also mirror volumes on a separate cluster (remote mirroring) for backup and disaster readiness purposes.",

                    ul: [
                        {
                            desc: "Creating a Local Mirror Volume",
                            text: "To create a local mirror volume:",
                            ol: [
                                {
                                    desc: "In the navigation pane, select MapR-FS > Volumes."
                                },
                                {
                                    desc: "Click the New Volume button."
                                },
                                {
                                    desc: "In the New Volume dialog, specify the following values:",
                                    text: [
                                        {
                                            bullet: "Select Local Mirror Volume."
                                        },
                                        {
                                            bullet: "Enter a name for the mirror volume in the Mirror Name field. If the mirror is on the same cluster as the source volume, the source and mirror volumes must have different names."
                                        },
                                        {
                                            bullet: "Enter the source volume name (not mount point) in the Source Volume Name field."
                                        }
                                    ]
                                },
                                {
                                    desc: "(Optional)To automate mirroring, select a schedule corresponding to critical data, important data, normal data, or a user-defined schedule from the Mirror Schedule dropdown menu."
                                }
                            ] // End local mirror volume subpoints
                        }, // End local mirror volume
                        {
                            desc: "Creating a Remote Mirror Volume",
                            ol: [
                                {
                                    desc: "In the navigation pane, select MapR-FS > Volumes."
                                },
                                {
                                    desc: "Click the New Volume button."
                                },
                                {
                                    desc: "In the New Volume dialog, specify the following values:"
                                },
                                {
                                    desc: "Select Local Mirror Volume or Remote Mirror Volume."
                                },
                                {
                                    desc: "Enter a name for the mirror volume in the Volume Name field. If the mirror is on the same cluster as the source volume, the source and mirror volumes must have different names."
                                },
                                {
                                    desc: "Enter the source volume name (not mount point) in the Source Volume field."
                                },
                                {
                                    desc: "Enter the source cluster name in the Source Cluster field."
                                },
                                {
                                    desc: "To automate mirroring, select a schedule from the Mirror Update Schedule dropdown menu."
                                }
                            ]

                        }
                    ] // End Mirror array
                }, // End mirror volumes
                {
                    desc: "Alarms and Notifications",

                    text: [
                        {
                            desc: "Alarms alert you to issues within the cluster. Alarms provide information about overall cluster health, including disk failures. Alarms tell you which volumes are under-replicated or have reached quota, as well as when services stop running on a node."
                        },
                        {
                            desc: "MapR automatically raises node, volume, and user and group alarms. When the system raises an alarm, it can send email notifications to cluster, node, or volume owners. You can configure email addresses for alarms to notify additional people each time the system raises a new alarm."
                        }
                    ],
                    ul: [
                        {
                            desc: "Explore the interface",
                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the Cluster group and click the Dashboard view. Alarms display in the Alarms pane of the Dashboard."
                                },
                                {
                                    desc: "Optionally, you can expand the Alarms group and click either the Volume Alarms view or the Node Alarms view."
                                }
                            ]

                        },
                        {
                            desc: "Configuring Alarm Notifications",
                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the Alarms group and click the Alerts view."
                                },
                                {
                                    desc: "Click Alarm Notifications to display the Alerts dialog."
                                },
                                {
                                    desc: "Select the Standard Notification checkbox to send notifications to the owner of the cluster, node, volume, or entity."
                                },
                                {
                                    desc: "Enter email addresses in the Additional Email Address fields to send alarm notifications to additional people."
                                },
                                {
                                    desc: "Click OK to save the settings."
                                }

                            ]
                        }
                    ] // End Alarm list
                }, // End Alarm notifications
                {

                    desc: "Metrics",
                    text: [
                        {
                            desc: "When you install MapR, you can configure a MySQL database to store metrics. The MapR Metrics service collects and displays metrics for MapReduce jobs, tasks, and task attempts that run on the nodes in your cluster. The metrics help predict cluster usage, measure which jobs use the most resources, and troubleshoot the root causes of failures or performance problems."
                        },
                        {
                            desc: "You can view the following metrics for jobs, tasks, and task attempts:"
                        },
                        {
                            bullet: "Cumulative CPU and memory usage"
                        },
                        {
                            bullet: "Number of running or failed tasks or attempts"
                        },
                        {
                            bullet: "Speed of input, output, and shuffle"
                        },
                        {
                            bullet: "Duration of task attempts"
                        },
                        {
                            bullet: "Amount of data read, written, or shuffled"
                        },
                        {
                            bullet: "Amount of memory currently in use"
                        },
                        {
                            bullet: "Number of records skipped or spilled"
                        },
                        {
                            desc: "The MapR Control System provides sophisticated charts, graphs, and histograms that show trends and detailed statistics. Histograms display job information. Line charts display jobs and task attempts. All histograms and charts can work without plugins on your browser or smart phone because they are implemented using HTML5 CSS and JavaScript."
                        }
                    ],
                    ul: [
                        {
                            desc: "Viewing Job Metrics",
                            text: [
                                {
                                    desc: "Prerequisite: Before you can view job metrics in the MapR Control System, you must run at least one MapReduce job. To run a MapReduce job in the MapR VM, navigate to the HUE interface and complete the Using Pig tutorial."
                                },
                                {
                                    desc: "To view job metrics:"
                                }
                            ],

                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the Cluster group and click the Jobs view. A histogram displays the distribution of jobs by job duration, as well as a list of all jobs that have run on the cluster."
                                },
                                {
                                    desc: "Hover the cursor over a bar in the histogram and click Filter to filter results down to that particular job."
                                },
                                {
                                    desc: "Click on the job name in the list to drill down into the job. A new view for the job appears and displays all job tasks."
                                },
                                {
                                    desc: "Click on a task ID in the list to drill down into the task and view task attempts."
                                },
                                {
                                    desc: "Select the Chart and Task views to see the variation between the two views."
                                }
                            ]
                        }
                    ] // End metrics list item
                }// End metrics
            ] // End getting started with mapr array
        }, // End getting started
        {
            desc: "Summary",
            text: "You have learned how to navigate the MapR Control System interface, as well as how to perform some administrative tasks on a cluster. You experience how to add a MapR product license, set up rack topology, create volumes, snapshots, and mirror, configure notifications and view alarms, and how to review job metrics."
        },
        {
            desc: "Support and Feedback",
            std: [
                {
                    desc: "For Help",
                    text: "Visit MapR X if you require assistance with the MapR Virtual Machine."
                },
                {
                    desc: "Tell us what you think",
                    text: "We appreciate feedback. If you would like to send feedback regarding your MapR Virtual Machine experience, email X."
                }
            ]

        }
    ]; // End array
}());
