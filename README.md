# tftpd-pxe
A simple TFTP server for PXE-based installs with an API for managing pxelinux.cfg files

## Example
docker run -d -it -v /tftpboot:/var/tftpboot -p 69:69/udp -p 8069:8069/tcp curtispatrick84/tftpd-pxe:latest

## Docker Hub
https://hub.docker.com/r/curtispatrick84/tftpd-pxe
