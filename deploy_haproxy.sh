docker rm -f loadbalancer_haproxy;
docker run -d --name loadbalancer_haproxy -v $(pwd)/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro -p 80:80 haproxy;