/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
 noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
 strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global define:true*/

(function () {
    "use strict"
    MAPR.Text = MAPR.Text || {};
    var img = function (img) {
        return "<img class='vm_inline' src='images/vm/" + img + ".png'>";
    };

    MAPR.Text.Tutorial = [{
        desc: "Introducing MapR's Sandbox for Hadoop",
        text: [{
            desc: "MapR's Sandbox for Hadoop is a fully-functional single-node cluster capable of running MapReduce programs and working with applications like Hive and Pig. You can experience MapR's Sandbox for Hadoop on nearly any 64-bit computer. "
        },
        {
            desc: "The sandbox provides an environment for you to experiment with the MapR Control System and HUE graphical interfaces running on the MapR File System (MapR-FS). MapR-FS is a fully read-write distributed file system that allows applications to concurrently read and write directly to disk. You can mount a MapR cluster via NFS, or you can mount NFS on a Linux, Mac, or Windows client."
        },
        {
            desc: "Use the information and tutorials included in MapR's Sandbox for Hadoop to discover the MapR Control System and applications included in the HUE interface. The tutorials are intended to guide you through some basic administrator and developer procedures you might perform on a cluster. You can also use the sandbox to explore solutions to your use cases, and run jobs on your data."
        },
        {
            desc: "If you would like to experience more of MapR, download and test drive a free version of MapR's distribution for Hadoop. You'll see how easy, fast, and dependable true enterprise-grade Hadoop can be, and learn why more companies with mission-critical requirements are choosing MapR."
        },
        {
            desc: "For more information about MapR, Hadoop, and MapReduce, visit MapR Academy and watch the informative videos posted on the site. MapR also provides instructor led and web-based training if you decide you want to learn about MapR and its unique offerings in greater depth."
        }]
        
        },  // End introduction
        { // Using HUE
            desc: "Explore HUE in MapR's Sandbox for Hadoop",

            text: [
                {
                    desc: "Hue is an interface for interacting with web applications that access the MapR File System (MapR-FS). Use the applications in HUE to access MapR-FS, work with tables, run Hive queries, MapReduce jobs, and Oozie workflows."
                },

                {
                    desc: "MapR's Sandbox for Hadoop includes brief overviews and tutorials for the following HUE applications:"
                },

                {
                    bullet: "File Browser"
                },
                {
                    bullet: "Metastore Manager"
                },
                {
                    bullet: "Beeswax"
                },
                {
                    bullet: "Pig"
                },
                {
                    desc: "The tutorials are designed to help get you acquainted with HUE and MapR-FS. Use the tutorials to perform the following operations:"
                },
                {
                    bullet: "Mount a MapR cluster via NFS"
                },
                {
                    bullet: "Upload files with File Browser"
                },
                {
                    bullet: "Convert a file into a table with Metastore Manager"
                },
                {
                    bullet: "Run a simple Hive query on a table with Beeswax"
                },
                {
                    bullet: "Create and run a word count MapReduce job with Pig"
                },
                {
                    bullet: "Create and submit a MapReduce job design with Job Designer "
                },
                {
                    bullet: "Create and run a workflow with Oozie"
                }
            ], // End intro text
            std: [ // Start items
                {
                    desc: "Before You Begin",
                    text: [
                        {
                            desc: "Download the following files for use in the tutorials:"
                        },

                        {
                            bullet: "<a href='docs/customers.csv'>customers.csv</a>"
                        },
                        {
                            bullet: "<a href='docs/constitution.txt'>constitution.txt</a>"
                        },
                        {
                            bullet: "<a href='docs/oozie-examples-3.3.2-mapr.jar'>oozie-examples-3.3.2-mapr.jar</a>"
                        },
                        {
                            buleet: "<a href='docs/workflow.xml'>workflow.xml</a>"
                        }
                    ]
                }, // End before you begin
                { // Start NFS mount
                    desc: "NFS Mount",

                    post: "<strong>Next:</strong> Navigate to the Hue interface, and use File Browser to create a directory and upload a sample file to the MapR file system.",

                    text: [{
                        desc: "When you mount a MapR cluster directly via NFS, your applications can read and write data directly into the cluster with standard tools, applications, and scripts. MapR enables direct file modification and multiple concurrent reads and writes via POSIX semantics. For example, you can run a MapReduce job that outputs to a CSV file, then import the CSV file directly into SQL via NFS. "
                    },
                    {
                        desc: "MapR exports each cluster as the directory /mapr/cluster name. For example, /mapr/my.cluster.com. If you create a mount point with the local path /mapr, then Hadoop FS paths and NFS paths to the cluster will be the same. This makes it easy to work on the same files via NFS and Hadoop. In a multi-cluster setting, the clusters share a single namespace, and you can see them all by mounting the top-level /mapr directory."
                    },
                    {
                        desc: "If you are on a Linux machine, follow the instructions in the Mounting the Cluster via NFS tutorial. If you are on a machine running Windows XP, Windows 2000, or Windows 7, follow the instructions in the Mounting the Cluster via NFS with Neko Drive on Windows XP/2000/7 tutorial. For more information about NFS mount, refer to Accessing Data with NFS."
                    }],
                    std: [{
                        desc: "Mounting the Cluster via NFS",
                        text: "In this tutorial, open a terminal window and mount the MapR cluster via NFS. After you mount the cluster, drag and drop files from your machine into the MapR directory. ",
                        ul: [{
                            desc: "Mount the cluster via NFS:",
                            ol: [{
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
                                        desc: "mapr@ubuntu:~$ sudo mount 't nfs 'o nolock localhost:/mapr /mapr"
                                    },
                                    ]
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
                                        desc: "/dev/sda1 on / type ext4 (rw,errors=remount-ro)"
                                    },
                                    {
                                        desc: "proc on /proc type proc (rw,noexec,nosuid,nodev)"
                                    },
                                    {
                                        desc: "sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)"
                                    },
                                    {
                                        desc: "none on /sys/fs/fuse/connections type fusectl (rw)"
                                    },
                                    {
                                        desc: "none on /sys/kernel/debug type debugfs (rw)"
                                    },
                                    {
                                        desc: "none on /sys/kernel/security type securityfs (rw)"
                                    },
                                    {
                                        desc: "udev on /dev type devtmpfs (rw,mode=0755)"
                                    },
                                    {
                                        desc: "devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=0620)"
                                    },
                                    {
                                        desc: "tmpfs on /run type tmpfs (rw,noexec,nosuid,size=10%,mode=0755)"
                                    },
                                    {
                                        desc: "none on /run/lock type tmpfs (rw,noexec,nosuid,nodev,size=5242880)"
                                    },
                                    {
                                        desc: "none on /run/shm type tmpfs (rw,nosuid,nodev)"
                                    },
                                    {
                                        desc: "rpc_pipefs on /run/rpc_pipefs type rpc_pipefs (rw)"
                                    },
                                    {
                                        desc: "localhost:/mapr on /mapr type nfs (rw,soft,intr,nolock,addr=127.0.0.1)"
                                    },
                                    ]},
                                    {
                                        desc: "Go to your desktop, and select the MapR NFS mount icon to open the MapR directory."
                                    },
                                    {
                                        desc: "Select any files from a directory on your machine and drag and drop them into the MapR directory. You can also drag and drop files from the MapR directory to a directory on your machine."
                                    }]
                        },
                        {
                            desc: "Mounting the Cluster via NFS with Neko Drive on Windows XP/2000/7",
                            text: [{
                                desc: "NekoDrive is an NFS client for Windows based on the Dokan user file system library. You can install NekoDrive and use it to mount a NFS share on a 64-bit machine running Windows XP, Windows 2000, or Windows 7. Neko supports NFS v2, v3, and v4 over TCP and UDP."
                            },
                            {
                                desc: "You can access source code for the NekoDrive build used in these instructions at http://github.com/mapr. To view the original NekoDrive source code, go to http://code.google.com/p/nekodrive/."
                            }],
                            ul: [{
                                desc: "Before You Install NekoDrive",
                                text: "Before you install NekoDrive, a user with administrator rights on the system must install the following components in the order specified: ",
                                ol: [
                                {
                                    desc: "Install Microsoft .net Framework 4.0 redistributable:",
                                    text: "http://www.microsoft.com/en-us/download/details.aspx?id=17718"
                                },
                                {
                                    desc: "Install latest version of Dokan Library:",
                                    text: "http://dokan-dev.net/en/download/"
                                }
                                ]
                            },
                            {
                                desc: "Install NekoDrive:",
                                ol: [
                                    {
                                    desc: "Double-click on the NekoDriveSetup.msi to launch the system. If a security dialog appears, click Run."
                                },

                                {
                                    desc: "Click Run to continue. The Welcome to the NekoDrive software and license terms display."
                                },

                                {
                                    desc: "Click Next to continue. The Select Installation Folder dialog appears."
                                },
                                {
                                    desc: "Choose to install NekoDrive globally or only for the current user. ",
                                    text: "Note the installation location. The default location is C:\Program Files (x86)\NekoDrive. This path is likely to change."
                                },
                                {
                                    desc: "Click Next to continue. The Confirm Installation dialog appears."
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

                                    ]
                                },
                                {
                                    desc: "Click Close."
                                },

                                ]

                            },
                            {
                                desc: "Mount the cluster with NekoDrive:",
                                text: [
                                    {
                                    desc: "Locate the directory where NekoDrive is installed on the system. By default this will be under C:\Program Files (x86)\NekoDrive. This path may be different on your system.",
                                },
                                {
                                    desc: "Locate NekoDrive.exe, and right-click on the icon to create a desktop shortcut.",
                                },
                                {
                                    desc: "Double-click the icon to launch the application. The following window appears:",
                                },

                                {
                                    desc: "Enter the IP address of the VM in the appropriate field, and leave the default V3 and TCP options. They indicate that this is a V3 TCP mount. You can locate the IP address of the VM in the VMware Player console.",
                                },
                                {
                                    desc: "Click Connect to see the available mounts on the server.",
                                },

                                {
                                    desc: "Select a mount from the Devices dropdown list, choose a drive letter, and click Mount to mount the share at the specified location. If the drive mounts successfully, an Explorer window appears and shows contents of the location. Minimize the NekoDrive window to keep the mount active.",
                                },

                                ]

                            }
                            ]

                        }]

                    }]

                },
                { // Start FileBrowser
                    desc: "File Browser",
                    text: [

                        {
                            desc: "File Browser is an application that you can use to access files and directories in the MapR File System (MapR-FS). Use the File Browser in HUE to perform the following directory tasks:"
                        },

                        {
                            bullet: "Create directories"
                        },
                        {
                            bullet: "Upload, rename, transfer, and delete files and directories"
                        },
                        {
                            bullet: "Change the owner, group, and permissions of a file or directory"
                        },
                        {
                            bullet: "View and edit files as text or binary or download the files to your local system"
                        },
                        {
                            bullet: "View MapReduce job input and output files"
                        }
                    ],
                    std: [
                        {
                            desc: "Using File Browser",

                            text: "In this tutorial, open File Browser, create a new directory, and upload the Customers.csv file.",

                            ul: [
                                {
                                    desc: "Create a new directory:",

                                    ol: [
                                        {
                                            desc: "Click " + img("hue_fb") + ". The File Browser page opens."
                                        },
                                        {
                                            desc: "Click the New button, and select Directory."
                                        },
                                        {
                                            desc: "Enter CustomerDirectory as the Directory Name."
                                        },
                                        {
                                            desc: "Click Submit. The CustomerDirectory is added to the list."
                                        }
                                    ]
                                },
                                {
                                    desc: "Upload a file:",
                                    ol: [
                                        {
                                            desc: "Click on the CustomerDirectory name in the list to open the directory."
                                        },
                                        {
                                            desc: "Click the Upload button, and select Files."
                                        },
                                        {
                                            desc: "Click Select Files in the pop up dialog."
                                        },
                                        {
                                            desc: "Navigate to the Customers.csv file, and upload it. The file displays in the CustomerDirectory."
                                        }
                                    ]}
                            ],

                            post: "<strong>Next step</strong>: Use Metastore Manager to create a table from the uploaded file."


                        }
                    ] // End using filebrowser


                }, // End Filebrowser
                {

                    desc: "Metastore Manager",

                    text: [
                        {
                            desc: "Metastore Manager is an application that you can use to manage databases, tables, and partitions stored in a relational database that applications, like HIVE, access through the metastore service API."
                        },

                        {
                            desc: "Use Metastore Manager to perform the following table operations:"
                        },

                        {
                            bullet: "Create tables"
                        },
                        {
                            bullet: "Browse tables"
                        },
                        {
                            bullet: "Import table data"
                        },
                        {
                            bullet: "Drop tables"
                        },
                        {
                            bullet: "View table location"
                        },
                        {
                            desc: "Use Metastore Manager to perform the following database operations:"
                        },

                        {
                            bullet: "Select a database"
                        },
                        {
                            bullet: "Create a database"
                        },
                        {
                            bullet: "Drop databases"
                        }
                    ],
                    std: [
                        {
                            desc: "Using Metastore Manager",
                            text: "In this tutorial, open Metastore Manager and create a table from the Customer.csv file.",

                                    ul: [
                                        {
                                            desc: "Import the Customer.csv file:",

                                            ol: [
                                                {
                                                    desc: "Click " + img("hue_mm") + ". The Metastore Manager page opens."
                                                },
                                                {
                                                    desc: "Under Actions, select Create a new table from a file."
                                                },
                                                {
                                                    desc: "Enter customer_table as the table name."
                                                },
                                                {
                                                    desc: "Browse to the input file location in the MapR-FS."
                                                },
                                                {
                                                    desc: "Select the Customer.csv file. The file path appears in the Input File field."
                                                },
                                                {
                                                    desc: "Select the Import data from file checkbox."
                                                },
                                                {
                                                    desc: "Click Next."
                                                }
                                            ]
                                        },
                                        {
                                            desc: "Choose a delimiter:",
                                            ol: [
                                                {
                                                    desc: "Select comma as the delimiter."
                                                },
                                                {
                                                    desc: "Click Next."
                                                }
                                            ]
                                        },
                                        {
                                            desc: "Define your columns:",
                                            ol: [
                                                {
                                                    desc: "Enter column names."
                                                },
                                                {
                                                    desc: "Select column types that correlate with the data."
                                                },
                                                {
                                                    desc: "Click Create table. A message, 'Waiting for query' appears while the system creates the table."
                                                },
                                                {
                                                    desc: "After the table is created, click on the Sample view to see the table."
                                                }
                                            ]
                                        }

                                    ],

                                    post: "<strong>Next step</strong>: Use Beeswax to run a Hive query on the table."
                        }
                    ] // End metastore list items
                }, // End metastore
                { // Start Beeswax
                    desc: "Beeswax",

                    text: "Beeswax is an application for querying data in Hive. Hive is a data warehouse system for Hadoop that uses an SQL-like language to query structured data in the MapR File System (MapR-FS). You can access Beeswax from the HUE interface to run Hive queries with Hive's Query Language (HQL) and then save the queries.",

                    std: [
                        {
                            desc: "Using Beeswax",
                            text: "In this tutorial, use the Beeswax application to create a customer_table in Hive from the Customers.csv file you uploaded in the Using Metastore Manager tutuorial. Run a basic query against the customer_table you uploaded.",
                            ul: [
                                {
                                desc: "Create and run a query:",
                            ol: [
                                {
                                    desc: "Click " + img("hue_bees") + ". The Hive Query page opens."
                                },
                                {
                                    desc: "In the Query Editor, enter the following query:",
                                    text: [
                                        {
                                            desc: "SELECT * FROM customer_table WHERE state=\"TX\""
                                        },

                                        {
                                            desc: "The system processes the query and then displays all the customers located in Texas in the Results view."
                                        }
                                    ]
                                },

                                {
                                    desc: "Optionally, save the query or download the query as a CSV or XLS file."
                                }
                            ] // End beeswax tutorial
                            }
                            ],

                            post: "<strong>Next step</strong>: Use Pig to create a script and run a MapReduce job on the constitution.txt file."
                        }
                    ] // End Beeswax items


                }, // End Beeswax
                { // Start Pig

                    desc: "Pig",

                    text: "Pig is a platform for parallelized analysis of large data sets. Pig programs use a language called Pig Latin.",

                    std: [ // Start pig tutorials
                        {
                            desc: "Using Pig",

                            text: "In this tutorial, use File Browser to create a directory for a US Constitution text file, and then use Pig to create a script that runs a word count MapReduce job on the text in the file. After you run the MapReduce job, view the wordcount file generated by the job.",

                            ul: [
                                {
                                    desc: "Create a new directory for the constitution.txt file:",

                                    ol: [
                                        {
                                            desc: "Click " + img("hue_fb") + ". The File Browser page opens."
                                        },
                                        {
                                            desc: "Click the New button, and select Directory."
                                        },
                                        {
                                            desc: "Enter 'in' as the directory name, and click Submit. The new directory displays in the list."
                                        },
                                        {
                                            desc: "Click on the word 'in' in the list to open the directory."
                                        },
                                        {
                                            desc: "Click the Upload button, and select Files."
                                        },
                                        {
                                            desc: "Click the Select Files button."
                                        },
                                        {
                                            desc: "Navigate to the constitution.txt file and upload it. The file appears in the list.",
                                            text: [
                                                {
                                                    desc: "Notice the full directory path: user/mapr/in"
                                                },
                                                {
                                                    desc: "You will need this path when you create a PIG script to run the MapReduce job."
                                                }

                                            ]

                                        }
                                    ]
                                },
                                {
                                    desc: "Create a Pig script and run a word count MapReduce job:",
                                    ol: [
                                        {
                                            desc: "Click " + img("hue_pig") + ". The Pig script page opens."
                                        },
                                        {
                                            desc: "Enter ConstitutionWordcount as the title for the script."
                                        },
                                        {
                                            desc: "In the script window, enter the following lines, and press Enter after you type each line :",
                                            text: [
                                                {
                                                    desc: "A = LOAD '/user/mapr/in' USING TextLoader() AS (words:chararray);"
                                                },
                                                {
                                                    desc: "B = FOREACH A GENERATE FLATTEN(TOKENIZE(*));"
                                                },
                                                {
                                                    desc: "C = GROUP B BY $0;"
                                                },
                                                {
                                                    desc: "D = FOREACH C GENERATE group, COUNT(B);"
                                                },
                                                {
                                                    desc: "STORE D INTO '/user/mapr/wordcount';"
                                                }
                                            ]
                                        },
                                        {
                                            desc: "Click Execute to run the script.",
                                            text: "The script picks up the file from the 'in' directory you created using the File Browser. The system runs the MapReduce job and stores the output in a wordcount directory created by the script. You can click on the Logs link to verify that the job completed."
                                        },
                                        {
                                            desc: "Click Save to save the script."
                                        }
                                    ]
                                },
                                {
                                    desc: "View the wordcount file that contains the MapReduce job results:",

                                    ol: [
                                        {
                                            desc: "Click " + img("hue_fb") + ". The File Browser page opens."
                                        },
                                        {
                                            desc: "Navigate to the user/mapr/wordcount directory."
                                        },
                                        {
                                            desc: "Open the file in the directory."
                                        },
                                        {
                                            desc: "Review the output to see which word was used the most in the US Constitution."
                                        },
                                        {
                                            desc: "Optionally, edit or download the file."
                                        }
                                    ],

                                    post: "<strong>Next step</strong>: Use Job Designer to create and submit a MapReduce job design."
                                }
                            ]
                        }
                    ] // End Pig Tutorial

                }, // End Pig
                { // Start Job designer

                    desc: "Job Designer",

                    text: [
                        {
                            desc: "Job Designer is an application that you can use to submit MapReduce, Hadoop streaming, or JAR jobs. A MapReduce job contains Java map and reduce functions. You can use existing mapper and reducer classes in a MapReduce job design without writing a main Java class. A Hadoop streaming job is a job where map and reduce functions, written in a non-Java language, read and write standard Unix inputs and outputs. A JAR job is a job where map and reduce functions, written in Java, read and write standard Unix inputs and outputs."
                        },
                        {
                            desc: "When you create a MapReduce job in Job Designer, you can configure variables in the form of $variable_name for all job design settings except Name and Description. If you include variables, you can specify values for the variables in a dialog box that appears when you submit the job."
                        }
                    ],
                    std: [
                        {
                            desc: "Using Job Designer",

                            text: "In this tutorial, use File Browser to create a directory that you can upload the sample JAR file to. Use Job Designer to create a MapReduce job using the sample JAR file. Submit the job, and view output file.",

                            ul: [
                                {
                                    desc: "Create a new directory:",
                                    ol: [

                                        {
                                            desc: "Click " + img("hue_fb") + ". The File Browser page opens."
                                        },
                                        {
                                            desc: "Click the New button, and select Directory."
                                        },
                                        {
                                            desc: "Enter mapreducejob as the Directory Name."
                                        },
                                        {
                                            desc: "Click Submit. The mapreducejob directory is added to the list."
                                        }
                                    ]
                                },
                                {
                                    desc: "Upload the JAR file:",

                                    ol: [
                                        {
                                            desc: "Click on mapreducejob in the list to open the directory."
                                        },
                                        {
                                            desc: "Click the Upload button, and select Files."
                                        },
                                        {
                                            desc: "Click Select Files in the pop up dialog."
                                        },
                                        {
                                            desc: "Navigate to the oozie-examples-3.3.2-mapr.jar, and upload it. The file displays in the mapreducejob directory."
                                        }
                                    ]
                                },
                                {
                                    desc: "Create a MapReduce Job Design:",


                                    ol: [
                                        {
                                            desc: "Click " + img("hue_jd") + ". The Job Designer page opens."
                                        },
                                        {
                                            desc: "Click the New Action button, and select MapReduce."
                                        },
                                        {
                                            desc: "Configure the job settings with the information below:"
                                            /*        Setting

                                             Description

                                             Name

                                             Enter MapReduceJobDesign as the job name.

                                             Description

                                             Enter Job Design Tutorial as the descriptor.

                                             JAR Path

                                             Enter user/mapr/mapreducejob/oozie-examples-3.3.2-mapr.jar as the fully-qualified path to the JAR file with the classes that implement the mapper and reducer functions.

                                             Job Properties

                                             Click the Add property button four times. Enter the following property names and their associated value:

                                             Property Name

                                             Value

                                             mapred.mapper.class

                                             org.apache.oozie.example.SampleMapper

                                             mapred.reducer.class

                                             org.apache.oozie.example.SampleReducer

                                             mapred.output.dir

                                             /user/mapr/mapreducejob/output

                                             mapred.input.dir

                                             /oozie/examples/input-data/text
                                             */
                                        },
                                        {
                                            desc: "Click Save. The Job Designs page appears with the new MapReduceJobDesign in the list."
                                        }

                                    ]
                                },
                                {
                                    desc: "Submit the Job Design:",
                                    ol: [
                                        {
                                            desc: "Select the checkbox next to the MapReduceJobDesign job design."
                                        },
                                        {
                                            desc: "Click the Submit button. A submit dialog appears."
                                        },
                                        {
                                            desc: "Click Submit."
                                        },
                                        {
                                            desc: "Click the Log view to see the log file as the job processes."
                                        }
                                    ]
                                },
                                {
                                    desc: "View the output file:",
                                    ol: [
                                        {
                                            desc: "Click " + img("hue_fb") + ". The File Browser page opens."
                                        },
                                        {
                                            desc: "Click on mapreducejob in the list to open the directory."
                                        },
                                        {
                                            desc: "Click on output in the list to open the output directory."
                                        },
                                        {
                                            desc: "Click on the part-xxxx file to view the job output."
                                        },

                                    ]
                                }
                            ],
                            post: "<strong>Next step</strong>: Use Oozie to submit a workflow."
                        }
                    ] // End Job designer tutorial
                }, // End Job Designer
                { // Start Oozie
                    desc: "Oozie",

                    text: "Oozie is a workflow system for Hadoop. Use Oozie to set up workflows that execute MapReduce jobs and set up a coordinator that manages workflows.",
                    std: [
                        {

                            desc: "Using Oozie",

                            text: "In this tutorial, delete the output directory created from the MapReduce job you ran in the Job Designer tutorial. Submit the MapReduce workflow.",

                            ul: [
                                {
                                    desc: "Delete the output file:",
                                    ol: [
                                        {
                                            desc: "Click " + img("hue_fb") + ". The File Browser page opens."
                                        },
                                        {
                                            desc: "Click mapreducejob in the list to open the directory."
                                        },
                                        {
                                            desc: "Select the checkbox next to the Output directory."
                                        },
                                        {
                                            desc: "Click the Delete forever button. A confirmation dialog appears."
                                        },
                                        {
                                            desc: "Click Yes."
                                        }
                                    ]
                                },
                                {

                                    desc: "Submit a workflow:",

                                    ol: [

                                        {
                                            desc: "Click " + img("hue_ooz") + ". The Oozie page opens."
                                        },
                                        {
                                            desc: "Click mapreducejob in the list to open the directory."
                                        },
                                        {
                                            desc: "Select the checkbox next to the Output directory."
                                        },
                                        {
                                            desc: "Click the Delete forever button. A confirmation dialog appears."
                                        },
                                        {
                                            desc: "Click Yes."
                                        }
                                    ]}
                            ]
                        }
                    ] // End oozie tutorial


                } // End Oozie

            ] // End intro items


        }, // END Using HUE
        {
            desc: "Summary",
            text: "You have learned how to navigate the HUE interface and use some applications included in HUE. You created new directories and uploaded data into the MapR-FS through the File Browser; created a table from a file using Metastore Manager; created and ran a Hive query using Beeswax; created a Pig script and ran a wordcount MapReduce job; used Job Design to create and submit a MapReduce job design; and used Oozie to submit a workflow."
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
    ]; // END TUTORIAL
}());
