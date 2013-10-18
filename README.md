# MapR VM Demo: The Gold Standard in Virtual Machine Demos
==========================================================================
		    __  ___            ____     _    ____  ___   ____                     
		   /  |/  /___ _____  / __ \   | |  / /  |/  /  / __ \___  ____ ___  ____ 
		  / /|_/ / __ `/ __ \/ /_/ /   | | / / /|_/ /  / / / / _ \/ __ `__ \/ __ \
		 / /  / / /_/ / /_/ / _, _/    | |/ / /  / /  / /_/ /  __/ / / / / / /_/ /
		/_/  /_/\__,_/ .___/_/ |_|     |___/_/  /_/  /_____/\___/_/ /_/ /_/\____/ 
		            /_/                                             

The MapR VM Demo is used to provide a tutorial layer ontop of MCS and Hue.


Run bin/localsetup in order to install it locally for debugging purposes. This symbolically links all the files to the source files in this project, so any changes you make will be reflected in both locations.
You can also run bin/cleanup in order to remove all sym links
There is finally a bin/setup file that copies all files over to the given source directory to prepare it for build. 

IMPORTANT NOTE: DO NOT RUN COMMIT UNLESS YOU RUN CLEANUP FIRST. THIS CAN CAUSE VM FILES TO BE INSERTED INTO MAPR BUILDS. THIS IS DANGEROUS!!!
