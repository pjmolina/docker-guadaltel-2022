#!/bin/sh

docker run -d --name web1 -p 5001:9099  nodeweb
docker run -d --name web2 -p 5002:9099  nodeweb
docker run -d --name web3 -p 5003:9099  nodeweb