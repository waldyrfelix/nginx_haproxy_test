docker rm -f loadbalancer_nginx;
docker run -d --name loadbalancer_nginx -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro -p 80:80  nginx;