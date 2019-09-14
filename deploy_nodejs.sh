docker rm -f nodejs-api;
docker rmi -f nodejs-api-img;
docker build -t nodejs-api-img .;
docker run --name nodejs-api -p 80:80 -d nodejs-api-img;