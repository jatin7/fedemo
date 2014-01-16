#!/bin/bash -eux

if [ "${PACKER_BUILDER_TYPE}" == "virtualbox-ovf" ]; then
  echo "Installing VirtualBox guest additions"

  VBOX_VERSION=$(cat /home/maprdev/.vbox_version)
  mount -o loop /root/VBoxGuestAdditions_$VBOX_VERSION.iso /mnt
  sh /mnt/VBoxLinuxAdditions.run --nox11
  umount /mnt
  rm -rf /root/VBoxGuestAdditions_$VBOX_VERSION.iso
fi
