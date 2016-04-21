* Step 1: Unpack the OVA file
* Step 2: Modify the VMX
* Step 3: Pack the OVA again

Example vmx file

    .encoding = "UTF-8"
    displayname = "MapR-Sandbox-For-Hadoop-3.0.3"
    guestos = "rhel6-64"
    virtualhw.version = "8"
    config.version = "8"
    numvcpus = "2"
    cpuid.coresPerSocket = "1"
    memsize = "6144"
    pciBridge0.present = "TRUE"
    pciBridge4.present = "TRUE"
    pciBridge4.virtualDev = "pcieRootPort"
    pciBridge4.functions = "8"
    pciBridge5.present = "TRUE"
    pciBridge5.virtualDev = "pcieRootPort"
    pciBridge5.functions = "8"
    pciBridge6.present = "TRUE"
    pciBridge6.virtualDev = "pcieRootPort"
    pciBridge6.functions = "8"
    pciBridge7.present = "TRUE"
    pciBridge7.virtualDev = "pcieRootPort"
    pciBridge7.functions = "8"
    vmci0.present = "TRUE"
    floppy0.present = "FALSE"
    ide0:0.present = "TRUE"
    ide0:0.deviceType = "disk"
    ide0:0.fileName = "MapR-Sandbox-For-Hadoop-3.0.3-disk1.vmdk"
    ide0:0.mode = "persistent"
    ide1:0.present = "TRUE"
    ide1:0.deviceType = "disk"
    ide1:0.fileName = "MapR-Sandbox-For-Hadoop-3.0.3-disk2.vmdk"
    ethernet0.present = "TRUE"
    ethernet0.virtualDev = "e1000"
    ethernet0.connectionType = "nat"
    ethernet0.startConnected = "TRUE"
    ethernet0.addressType = "generated"
    toolscripts.afterpoweron = "true"
    toolscripts.afterresume = "true"
    toolscripts.beforepoweroff = "true"
    toolscripts.beforesuspend = "true"

* guestos needs to be corrected for VMware. Set guestos to "rhel6-64"
* Set virtualhw.version = "8"
* All instances of "ide1:1" need to be corrected to be "ide1:0" (on the same controller as ide0:0)

Convert the Virtualbox OVA to VMWare VMX

    ovftool --lax MapR-Sandbox-For-Hadoop-3.0.3.ova ./vmware

The above command converts into a generic VMX Sandbox Image

Fix the VMX file as noted above.

Convert the VMX back to OVA

    ovftool MapR-Sandbox-For-Hadoop-3.0.3.vmx MapR-Sandbox-For-Hadoop-3.0.3.ova
