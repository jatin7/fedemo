#!/bin/bash -eux

#Zeroing out empty space to save space in the final image
dd if=/dev/zero of=/EMPTY bs=1M
rm -f /EMPTY
