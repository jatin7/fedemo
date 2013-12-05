/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
 noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
 strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global define:true*/

(function () {
    "use strict"
    MAPR.Text = MAPR.Text || {};
    var img = function (img, width, height) {
        return "<img class='vm_inline' style='height:" + (!!height ? height + "px": "inherit") + 
            ";width:" + (!!width ? width + "px": "inherit") + 
            ";'src='images/vm/" + img + ".png'></img>";
    };

    MAPR.Text.Tutorial = [
        {
            desc: "Introducing MapR's Sandbox for Hadoop",
            text: [
                {
                    desc: "MapR's Sandbox for Hadoop is a fully-functional single-node cluster capable of running MapReduce programs and working with applications like Hive and Pig. You can experience MapR's Sandbox for Hadoop on nearly any 64-bit computer. "
                },

                {
                    desc: "The sandbox provides an environment for you to experiment with the MapR Control System and HUE graphical interfaces running on the MapR File System (MapR-FS). MapR-FS is a fully read-write distributed file system that allows applications to concurrently read and write directly to disk. You can mount a MapR cluster via NFS, or you can mount NFS on a Linux, Mac, or Windows client."
                },

                {
                    desc: "Use the information and tutorials included in MapR's Sandbox for Hadoop to discover the MapR Control System and applications included in the HUE interface. The tutorials are intended to guide you through some basic administrator and developer procedures you might perform on a cluster. You can also use the sandbox to explore solutions to your use cases, and run jobs on your data."
                },
                {
                    desc: "If you would like to experience more of MapR, <a href='http://www.mapr.com/products/download' target='_blank'>download and test drive a free version</a> of MapR's distribution for Hadoop. You'll see how easy, fast, and dependable true enterprise-grade Hadoop can be, and learn why more companies with mission-critical requirements are choosing MapR."
                },
                {
                    desc: "For more information about MapR, Hadoop, and MapReduce, visit <a href='http://www.mapr.com/academy/' target='_blank'>MapR Academy</a> and watch the informative videos posted on the site. MapR also provides instructor led and web-based training if you decide you want to learn about MapR and its unique offerings in greater depth."
                }
            ]
        },
        {
            desc: "Explore the MCS in MapR's Sandbox for Hadoop",
            text: [{
                desc: "The MapR Control System (MCS) is a graphical, programmatic control panel for cluster administration that provides complete cluster monitoring functionality and most of the functionality of the command line. The MCS provides job monitoring metrics that help you troubleshoot issues, such as which jobs required the most memory in a given week or which events caused job and task failures. Use the MCS to access, monitor, and perform administrative tasks on your cluster."
            },
            {
                desc: "MapR's Sandbox for Hadoop includes brief overviews and tutorials to help get you acquainted with some MCS features and functionality that you would use as a cluster administrator to ensure the cluster runs smoothly."
            },
            {
                desc: "Use the tutorials included in the sandbox to perform the following operations in the MCS:"
            },
            {
                bullet: ""
            },
            {
                bullet: "Mount a MapR cluster via NFS"
            },
            {
                bullet: "Explore the Dashboard view"
            },
            {
                bullet: "Set up topology"
            },
            {
                bullet: "Create volumes"
            },
            {
                bullet: "Take snapshots"
            },
            {
                bullet: "Create mirror volumes"
            },
            {
                bullet: "Configure notifications and alarms"
            },
            {
                bullet: "Review job metrics"
            }],
            std: [{ // Start NFS mount
                            desc: "NFS Mount",

                    post: "<strong>Next step</strong>: Navigate to the MapR Control System interface, and explore the MapR Control System (MCS). If prompted to login, enter mapr as the username and password.",

                            text: [
                                    {
                                        desc: "When you mount a MapR cluster directly via NFS, your applications can read and write data directly into the cluster with standard tools, applications, and scripts. MapR enables direct file modification and multiple concurrent reads and writes via POSIX semantics. For example, you can run a MapReduce job that outputs to a CSV file, then import the CSV file directly into SQL via NFS. "
                                    },
                                    {
                                        desc: "MapR exports each cluster as the directory /mapr/cluster name. For example, /mapr/my.cluster.com. If you create a mount point with the local path /mapr, then Hadoop FS paths and NFS paths to the cluster will be the same. This makes it easy to work on the same files via NFS and Hadoop. In a multi-cluster setting, the clusters share a single namespace, and you can see them all by mounting the top-level /mapr directory."
                                    },
                                    {
                                        desc: "If you are on a Linux machine, follow the instructions in the Mounting the Cluster via NFS tutorial. If you are on a machine running Windows XP, Windows 2000, or Windows 7, follow the instructions in the Mounting the Cluster via NFS with Neko Drive on Windows XP/2000/7 tutorial. For more information about NFS mount, refer to Accessing Data with NFS."
                                    }],
                            std: [
                                    {
                                        desc: "Mounting the Cluster via NFS",
                                        text: "In this tutorial, open a terminal window and mount the MapR cluster via NFS. After you mount the cluster, drag and drop files from your machine into the MapR directory. ",
                                        ul: [{
                                            desc: "Mount the cluster via NFS:",
                                            ol: [
                                                    {
                                                        desc: "Open a terminal window on the host machine.",
                                                    },
                                                    {
                                                        desc: "Type sudo showmount -e localhost in the terminal to see what exports are available on the local host.",
                                                        text: [{
                                                            desc: "Example: mapr@ubuntu:~$ sudo showmount -e localhost"
                                                        }]
                                                    },
                                                    {
                                                        desc: "Enter mapr as the password.",
                                                        text: [
                                                                {
                                                                    desc: "Example:"
                                                                },
                                                                {
                                                                    desc: "[sudo] password for mapr: mapr"
                                                                },
                                                                {
                                                                    desc: "The export list for localhost appears."
                                                                },
                                                                {
                                                                    desc: "Example:"
                                                                },
                                                                {
                                                                    desc: "Export list for localhost:"
                                                                },
                                                                {
                                                                    desc: "/mapr                *"
                                                                },
                                                                {
                                                                    desc: "/mapr/my.cluster.com *"
                                                                }]
                                                    },
                                                    {
                                                        desc: "If the mapr directory does not exist, create a new directory named /mapr."
                                                    },
                                                    {
                                                        desc: "If no hosts are listed, use the mount command to mount the cluster. ",
                                                        text: [
                                                                {
                                                                    desc: "Mount the exported share to the /mapr directory."
                                                                },
                                                                {
                                                                    desc: "Example: "
                                                                },
                                                                {
                                                                    desc: "mapr@ubuntu:~$ sudo mount -t nfs -o nolock localhost:/mapr /map "
                                                                }]
                                                    },
                                                    {
                                                        desc: "Use the mount command to verify that the mount was successful.",
                                                        text: [
                                                                {
                                                                    desc: "Example: "
                                                                },
                                                                {
                                                                    desc: "mapr@ubuntu:~$ sudo mount"
                                                                },
                                                                {
                                                                    desc: "The following syntax appears:"
                                                                },
                                                                {
                                                                    desc: "/dev/sda1 on / type ext4 (rw,errors=remount-ro)<br/>proc on /proc type proc (rw,noexec,nosuid,nodev)<br/>sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)<br/>none on /sys/fs/fuse/connections type fusectl (rw)<br/>none on /sys/kernel/debug type debugfs (rw)<br/>none on /sys/kernel/security type securityfs (rw)<br/>udev on /dev type devtmpfs (rw,mode=0755)<br/>devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=0620)<br/>tmpfs on /run type tmpfs (rw,noexec,nosuid,size=10%,mode=0755)<br/>none on /run/lock type tmpfs (rw,noexec,nosuid,nodev,size=5242880)<br/>none on /run/shm type tmpfs (rw,nosuid,nodev)<br/>rpc_pipefs on /run/rpc_pipefs type rpc_pipefs (rw)<br/>localhost:/mapr on /mapr type nfs (rw,soft,intr,nolock,addr=127.0.0.1)"
                                                                }, ]
                                                    },
                                                    {
                                                        desc: "Go to your desktop, and select the MapR NFS mount icon to open the MapR directory."
                                                    },
                                                    {
                                                        desc: "Select any files from a directory on your machine and drag and drop them into the MapR directory. You can also drag and drop files from the MapR directory to a directory on your machine."
                                                    }]
                                        }]
                                    },
                                    {
                                        desc: "Mounting the Cluster via NFS with Neko Drive on Windows XP/2000/7",
                                        text: [
                                                {
                                                    desc: "NekoDrive is an NFS client for Windows based on the Dokan user file system library. You can install NekoDrive and use it to mount a NFS share on a 64-bit machine running Windows XP, Windows 2000, or Windows 7. Neko supports NFS v2, v3, and v4 over TCP and UDP."
                                                },
                                                {
                                                    desc: "You can access source code for the NekoDrive build used in these instructions at <a href='http://github.com/mapr' target='_blank'>http://github.com/mapr</a>. To view the original NekoDrive source code, go to <a href='http://code.google.com/p/nekodrive/' target='_blank'>http://code.google.com/p/nekodrive/</a>."
                                                }],
                                        ul: [
                                                {
                                                    desc: "Before You Install NekoDrive",
                                                    text: "Before you install NekoDrive, a user with administrator rights on the system must install the following components in the order specified: ",
                                                    ol: [
                                                            {
                                                                desc: "Install Microsoft .net Framework 4.0 redistributable:",
                                                                text: "<a href='http://www.microsoft.com/en-us/download/details.aspx?id=17718' target='_blank'>http://www.microsoft.com/en-us/download/details.aspx?id=17718</a>"
                                                            },
                                                            {
                                                                desc: "Install latest version of Dokan Library:",
                                                                text: "<a href='http://dokan-dev.net/en/download/' target='_blank'>http://dokan-dev.net/en/download/</a>"
                                                            }]
                                                },
                                                {
                                                    desc: "Install NekoDrive:",
                                                    ol: [
                                                            {
                                                                desc: "Double-click on the NekoDriveSetup.msi to launch the system. If a security dialog appears, click Run."
                                                            },

                                                            {
                                                                desc: "Click Run to continue. The Welcome to the NekoDrive software and license terms display.",
                                                                text: [{
                                                                    img: "nekosetup"
                                                                }]

                                                            },

                                                            {
                                                                desc: "Click Next to continue. The Select Installation Folder dialog appears.",
                                                                text: [{
                                                                    img: "nekofolder"
                                                                }]
                                                            },
                                                            {
                                                                desc: "Choose to install NekoDrive globally or only for the current user. ",
                                                                text: "Note the installation location. The default location is C:\\Program Files (x86)\\NekoDrive. This path is likely to change."
                                                            },
                                                            {
                                                                desc: "Click Next to continue. The Confirm Installation dialog appears.",
                                                                img: "nekoconfirm"
                                                            },
                                                            {
                                                                desc: "Click Next to start the installation. ",
                                                                text: [
                                                                        {
                                                                            desc: "If a security warning dialog appears about installation of software on the hard drive, click Yes.",
                                                                        },
                                                                        {
                                                                            desc: "When installation completes, an Installation Complete dialog appears.",
                                                                        },
                                                                        {
                                                                            img: "nekodone"
                                                                        }

                                                                ]
                                                            },
                                                            {
                                                                desc: "Click Close."
                                                            },

                                                    ]

                                                },
                                                {
                                                    desc: "Mount the cluster with NekoDrive:",
                                                    ol: [
                                                            {
                                                                desc: "Locate the directory where NekoDrive is installed on the system. By default this will be under C:\Program Files (x86)\NekoDrive. This path may be different on your system.",
                                                            },
                                                            {
                                                                desc: "Locate NekoDrive.exe, and right-click on the icon to create a desktop shortcut.",
                                                            },
                                                            {
                                                                desc: "Double-click the icon to launch the application. The following window appears:",
                                                                text: [{
                                                                    img: "nekoinit"
                                                                }]
                                                            },

                                                            {
                                                                desc: "Enter the IP address of the VM in the appropriate field, and leave the default V3 and TCP options. They indicate that this is a V3 TCP mount. You can locate the IP address of the VM in the VMware Player console.",
                                                            },
                                                            {
                                                                desc: "Click Connect to see the available mounts on the server.",
                                                                text: [{
                                                                    img: "nekofinal"
                                                                }]
                                                            },

                                                            {
                                                                desc: "Select a mount from the Devices dropdown list, choose a drive letter, and click Mount to mount the share at the specified location. If the drive mounts successfully, an Explorer window appears and shows contents of the location. Minimize the NekoDrive window to keep the mount active.",
                                                            },

                                                    ]

                                                }]
                                    }]

                        },

            {
                    desc: "MCS Dashboard",
                    text: [{
                        desc: "When you first login to the MCS, the Dashboard view appears by defualt. The Dashboard provides a summary of information about the cluster including a cluster heat map that displays the health of each node; an alarms summary; cluster utilization that shows the CPU, memory, and disk space usage; services running across the cluster; the number of available, unavailable, and under replicated volumes; MapReduce jobs. "
                    },
                    {
                        img: "MCS_DashboardView"
                    }]
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
                                    desc: "Click on the node to see node details. A new view opens displaying the details. Expand and collapse the panels.",
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
                                    desc: "Click any of the service links to see nodes running a particular service."
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
                    std: [{
                            desc: "Explore the Navigation Panel",
                            ul: [{
                                    desc: "Click on any view in the Navigation panel and to explore options.",
                                    text: [{
                                        img: "NavigationPane"
                                    }]
                            }]
                    }]
                }]
        }, // End navigation
        {
            desc: "Getting Started in the MapR Control System",
            text: [{
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
            }],
            std: [{
                desc: "MapR License Management",
                text: [{
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
                }],
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
                            desc: "In the above example, the node \"node2\"  on rack \"rack1\" would have the following topology:"
                        },

                        {
                            desc: "/data/rack1/node2"
                        }
                    ],
                    std: [
                        {
                            desc: "Set Topology",
                            text: "Setting up the cluster's physical topology is an important step; not only does it help protect your data in case of a rack failure, it also enables data placement and job placement features. For more information, see <a href='http://www.mapr.com/doc/display/MapR/Node+Topology' target='_blank'>Node Topology</a>. ",
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
                            desc: "A volume is a logical unit that you create to organize data into groups to that you can manage your data and apply policy all at once instead of file by file. The volume structure defines how data is distributed across the nodes in your cluster."
                        },
                        {
                            desc: "You can create volumes for each user, department, or project. Volumes can enforce disk usage limits, set replication levels, establish ownership and accountability, and measure the cost generated by different projects or departments."
                        },
                        {
                            desc: "Configure volumes as soon as you can after getting your cluster up and running. Putting all your data in the cluster without organizing it into volumes can lead to headaches later. It is important to create many volumes for data storage and to select your choice of volumes strategically for management. Volumes are easily created, named, and their mount path designated from the MCS."
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
                            desc: "The root volume (mapr.cluster.root, mounted at /) contains the mount points for the other volumes. MapR provides a volume for HBase (if installed) and a /var/mapr volume containing information about cluster configuration. There is also a local volume for each node limited by its topology to reside only on its own node."
                        },
                        {
                            desc: "As shown in the example above, you should add a hierarchy of volumes for users, projects and departments, to enable you to manage data for these different entities separately."
                        }
                    ],
                    std: [
                        {
                            desc: "Create a volume:",
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
                                            bullet: "<strong>Usage Tracking</strong>: Set a quota, if desired, to limit the maximum size of the volume. The hard quota is a limit above which writes to the volume are disabled; the advisory quota is a limit above which a warning is sent to the volume's owner."
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
                    text: "A snapshot is a read-only image of a volume at a specific point in time. Snapshots are useful any time you need to roll back to a known good data set at a specific point in time. You can create a snapshot manually or automate the process with a schedule. If you want to automate the snapshot with a schedule, you first need to configure schedule details first.",

                    ul: [

                        {
                            desc: "Create a snapshot manually:",
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
                            desc: "Create a snapshot schedule:",
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
                            desc: "Creating Snapshot Schedules",
                            ol: [
                                {
                                    desc: "In the Navigation pane, expand the MapR-FS group and click the Volumes view."
                                },
                                {
                                    desc: "Display the Volume Properties dialog by clicking the volume name, or by selecting the checkbox beside the name of the volume and then clicking the Properties button."
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
                            desc: "Creating a local mirror volume:",
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
                            desc: "Create a remote mirror volume:",
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
                            desc: "Explore alarms in the MCS:",
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
                            desc: "Configure an alarm notification:",
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
                                    desc: "<strong>Prerequisite:</strong> Before you can view job metrics in the MapR Control System, you must run at least one MapReduce job. To run a MapReduce job in the MapR sandbox for Hadoop, navigate to the HUE interface and complete the Using Pig tutorial."
                                },
                                {
                                    desc: "View job metrics:"
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
            text: "You have learned how to mount a MapR cluster via NFS, navigate the MapR Control System interface, as well as how to perform some administrative tasks on a cluster. You set up rack topology, created a volume, snapshot, and mirrors, configured a notification, viewed alarms and job metrics. "
        },
        {
            desc: "Support and Feedback",
            text: "If you require assistance or have feedback regarding MapR's Hadoop Sandbox, submit your questions and comments to <a href='http://answers.mapr.com' target='_blank'>MapR Answers</a>"
        }
    ]; // End array
}());
