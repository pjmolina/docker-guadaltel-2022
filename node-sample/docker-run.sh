#!/bin/sh

docker rm web1 web2 web3 -f

docker run -d --name web1 -e APP_NAME=''    -p 5001:80  nodeweb
docker run -d --name web2 -e APP_NAME=mercurio -p 5002:80  nodeweb
docker run -d \
  --name web3 \
  -e APP_NAME=jupiter \
  -e VERSION=7 \
  -p 5003:80  \
  nodeweb 

