/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, indent:4, latedef:true, newcap:true,
 noarg:true, noempty:true, nonew:true, plusplus:true, quotmark:double, regexp:true, undef:true, unused:true,
 strict: true, trailing:true, maxdepth: 4, maxstatements:40, maxlen:120, browser:true, jquery:true*/
/*global define:true*/

(function () {
    "use strict"
    MAPR.Text = MAPR.Text || {};
    MAPR.Text.Tutorial = {
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
                desc: "If you are interested in learning more about MapR, Hadoop, and MapReduce visit MapR Academy and" +
                    "watch the informative videos posted on the site. MapR also provides instructor led and web-based" +
                    "training if you decide you want to learn about MapR and its unique offerings in greater depth."
            }
        ],
        std: [
            /*{
                desc: "Accessing the MapR VM",
                text: "Install the MapR Virtual Machine. Open the MapR Virtual Machine in a VM player. The system presents you with administrator and developer options. Selecting the administrator option navigates you to the MapR Control System. Selecting the Developer option navigates you to the HUE interface.",
                ul: [
                    {
                        desc: "MapR Control System",
                        text: "To access the MapR Control System:",
                        ol: [
                            {
                                desc: "Enter the provided URL in a browser window."
                            },
                            {
                                desc: "Login with the username mapr and the password mapr."
                            },
                            {
                                desc: "Click OK to continue."
                            },
                            {
                                desc: "If prompted, accept the terms of the license agreement to proceed."
                            }
                        ]
                    },
                    {
                        desc: "HUE Interfaces",
                        text: "To access the HUE interface:",
                        ol: [
                            {
                                desc: "Enter the provided URL in a browser window."
                            },
                            {
                                desc: "Login with the username mapr and the password mapr."
                            },
                            {
                                desc: "Click OK to continue."
                            }
                        ]
                    }
                ]
            },*/
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
                        std: [{
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
                                    }]
                            },
                            {
                                desc: "Click the Dashboard tab to return to the Dashboard view."
                            },
                            {
                                desc: "Click to view Heat Map controls and the node color legend.",
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
                                desc: "Click to close the Heat Map control panel."
                            }

                        ]
                        }]
                    },
                    {

                        desc: "Cluster Utilization, Jobs, Services, Volumes",
                        text: "In the panels to the right of the Heat Map, you can see cluster utilization, MapReduce jobs, services running across the cluster, as well as mounted and unmounted volumes in the cluster. You can click on multiple links in the panels for more details about the cluster and nodes.",
                        ol: [
                            {
                                desc: "Sed eget lacus mi. ",
                                text: "Fusce molestie lacus in nisl hendrerit, a porta odio congue. Donec eget suscipit mauris. Mauris scelerisque sit amet nibh ac malesuada. "
                            },

                            {
                                desc: "Etiam posuere nulla id blandit euismod. ",
                                text: "Phasellus elementum augue ipsum, et scelerisque sapien dictum vitae. Nulla urna risus, laoreet vitae commodo eget, rutrum ac dui. Phasellus porta elit id fringilla mattis. Donec sodales molestie metus, quis faucibus velit convallis ac. Mauris semper, sem ut posuere pharetra, massa neque porttitor nisl, eget eleifend sapien mi ac quam. Sed ac sapien consectetur turpis rhoncus tristique. Vivamus blandit, metus vel aliquet placerat, lorem leo malesuada odio, at consectetur dolor augue in felis. "
                            },
                            {
                                desc: "Cum sociis",
                                text: "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ultrices lorem in diam condimentum volutpat. Fusce et interdum justo, et dictum risus."

                            },
                            {
                                desc: "Nulla sit amet magna nibh.",
                                text: "Aenean luctus placerat ipsum quis condimentum. Aliquam consectetur tortor pellentesque, tempus neque id, tincidunt nibh. Phasellus tristique dictum augue, vel dictum enim laoreet ut. Mauris a mollis turpis. Nulla gravida elit sapien, ac sollicitudin odio auctor quis. Aliquam in lacus malesuada, semper felis rhoncus, ornare risus. Curabitur in egestas sapien. Etiam elementum pharetra lectus vel scelerisque. Morbi cursus adipiscing elit sit amet vehicula. "
                            },
                            {
                                desc: "Maecenas ullamcorper odio vel purus auctor",
                                text: "sit amet posuere erat porta. Pellentesque non lorem a sem tincidunt porta nec nec nisi. Sed auctor diam eget pharetra tincidunt. Quisque sit amet neque eget erat tempus rhoncus eu id mi. Mauris sed nisl tempus, commodo orci a, laoreet erat."
                            }
                        ]
                    }

                ]

            },
            {
                desc: "Proin vel vestibulum elit.",
                ul: [
                    {
                        desc: "Nam bibendum sapien blandit lectus accumsan viverra.",
                        text: "Proin feugiat aliquet condimentum. Praesent at lectus a enim luctus aliquam a et tortor. Cras a porttitor velit, nec vulputate lorem."
                    },
                    {
                        desc: "Aenean",
                        text: "ligula nibh, tincidunt non justo a, consequat laoreet nisl. Maecenas non sem metus. In placerat ante nulla, a accumsan sem rhoncus et. Nulla et fermentum nisi, eu iaculis erat."
                    },
                    {
                        desc: "Suspendisse potenti. Maecenas sodales, odio et pretium varius, odio est congue massa, eget adipiscing diam diam vel libero. ",
                        text: "Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    },
                    {
                        desc: "Donec leo lacus",
                        text: "consectetur a cursus nec, consectetur non erat. Ut interdum tincidunt tortor quis pulvinar. Nullam ligula neque, tempus sit amet leo egestas, rhoncus dignissim purus. Proin eu molestie est, sit amet aliquet nunc. Donec dignissim, massa vitae elementum adipiscing, purus neque laoreet nunc, vel dictum lorem quam eu augue. Integer id tempus est. Praesent ornare fringilla congue. Praesent volutpat ultricies risus in mollis. Phasellus molestie ipsum quis pulvinar viverra. Praesent varius purus eget felis tempor, at porttitor risus pulvinar. Etiam eleifend leo sapien, ut elementum ante pretium et. Curabitur magna purus, congue at leo et, vulputate placerat tellus. Duis et tempus nibh. Fusce aliquet vitae massa gravida dictum."
                    },
                    {
                        desc: "Sed sodales placerat sem",
                        text: "adipiscing laoreet dui aliquet ac. Etiam sagittis ultrices molestie. Etiam consequat aliquet metus, consequat semper massa convallis at. Nulla at ullamcorper erat. Donec interdum, elit vitae rhoncus venenatis, dolor leo condimentum augue, vel bibendum ante risus ut mi. Nam tempus vitae elit quis gravida. Duis aliquet gravida arcu, nec hendrerit elit blandit sit amet. Cras sagittis nibh non luctus rutrum. Quisque vitae augue leo. Morbi vitae nunc urna. Nunc eget nibh ullamcorper, aliquam dui vel, bibendum sem."
                    }

                ]
            },
            {
                desc: "Morbi ullamcorper accumsan magna vel condimentum.",
                text: " Nam ligula magna, dapibus ut leo eget, volutpat dapibus felis. Suspendisse magna odio, bibendum eu venenatis tincidunt, ornare vitae lectus. Proin vitae volutpat nibh, et mollis felis. Etiam non eleifend massa. Donec viverra lacus a elit luctus sagittis. Vestibulum accumsan metus magna. Maecenas ipsum orci, accumsan vitae magna ac, sodales venenatis tellus. Mauris condimentum nisl pharetra lorem volutpat congue. Donec bibendum leo et sagittis pretium.",
                ol: [
                    {
                        desc: "Sed eget lacus mi. ",
                        text: "Fusce molestie lacus in nisl hendrerit, a porta odio congue. Donec eget suscipit mauris. Mauris scelerisque sit amet nibh ac malesuada. "
                    },

                    {
                        desc: "Etiam posuere nulla id blandit euismod. ",
                        text: "Phasellus elementum augue ipsum, et scelerisque sapien dictum vitae. Nulla urna risus, laoreet vitae commodo eget, rutrum ac dui. Phasellus porta elit id fringilla mattis. Donec sodales molestie metus, quis faucibus velit convallis ac. Mauris semper, sem ut posuere pharetra, massa neque porttitor nisl, eget eleifend sapien mi ac quam. Sed ac sapien consectetur turpis rhoncus tristique. Vivamus blandit, metus vel aliquet placerat, lorem leo malesuada odio, at consectetur dolor augue in felis. "
                    },
                    {
                        desc: "Cum sociis",
                        text: "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ultrices lorem in diam condimentum volutpat. Fusce et interdum justo, et dictum risus."

                    },
                    {
                        desc: "Nulla sit amet magna nibh.",
                        text: "Aenean luctus placerat ipsum quis condimentum. Aliquam consectetur tortor pellentesque, tempus neque id, tincidunt nibh. Phasellus tristique dictum augue, vel dictum enim laoreet ut. Mauris a mollis turpis. Nulla gravida elit sapien, ac sollicitudin odio auctor quis. Aliquam in lacus malesuada, semper felis rhoncus, ornare risus. Curabitur in egestas sapien. Etiam elementum pharetra lectus vel scelerisque. Morbi cursus adipiscing elit sit amet vehicula. "
                    },
                    {
                        desc: "Maecenas ullamcorper odio vel purus auctor",
                        text: "sit amet posuere erat porta. Pellentesque non lorem a sem tincidunt porta nec nec nisi. Sed auctor diam eget pharetra tincidunt. Quisque sit amet neque eget erat tempus rhoncus eu id mi. Mauris sed nisl tempus, commodo orci a, laoreet erat."
                    }
                ]
            },
            {
                desc: "Etiam sed augue at purus blandit venenatis sed vestibulum diam. ",
                text: "Donec justo enim, molestie et velit a, varius tincidunt ligula. Curabitur eleifend sagittis lacus. Nam pulvinar aliquam quam nec molestie. Ut eu felis massa. Phasellus consequat magna at sem rhoncus, id blandit arcu posuere. Aenean feugiat faucibus fringilla.",
                ul: [
                    {
                        desc: "Ut quis vehicula lectus, eget ultricies justo. ",
                        text: "Pellentesque vitae libero vitae quam feugiat dictum non nec felis. Nullam nisl dui, commodo in blandit dictum, aliquam vel nisl. "
                    },
                    {
                        desc: "Cras placerat condimentum risus a hendrerit.",
                        text: "Proin ante dui, tincidunt vitae sem at, tincidunt placerat urna. Nam nec ultrices orci. Cras ac hendrerit sapien. Proin cursus eleifend fringilla. Aenean neque nulla, malesuada non lorem vel, scelerisque viverra nisl. Nam euismod enim eu arcu mollis eleifend. Curabitur adipiscing tempus justo at consequat."
                    },
                    {
                        desc: "Praesent quis mollis nibh. ",
                        text: "Sed nec quam ligula. "
                    },
                    {
                        desc: "Nullam sed arcu diam. ",
                        text: "In mollis est turpis, nec accumsan lacus suscipit at. Donec mollis molestie dui feugiat auctor. Ut convallis ligula sodales ligula pharetra, eu cursus sem pulvinar. Nunc magna risus, vulputate nec odio id, porta vestibulum odio. Etiam blandit convallis aliquam. Maecenas aliquam arcu tortor, vel condimentum nulla hendrerit eget. "
                    },
                    {
                        desc: "In malesuada tortor ",
                        text: "eu lectus gravida, eget congue nunc sagittis. Proin accumsan nibh mi, in imperdiet felis mattis sit amet. Morbi nunc velit, convallis in malesuada vel, egestas et lectus. Proin elementum eros sed pretium dictum. Aliquam eu venenatis metus, bibendum interdum ante. Duis ut laoreet justo."
                    }
                ]
            }
        ]
    };
}());
