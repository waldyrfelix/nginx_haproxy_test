ab -n 100000 -c 64 -k http://localhost:3000/ > output_nodejs_one_process.txt
ab -n 100000 -c 64 -k http://localhost:3000/ > output_nodejs_cluster_process.txt
ab -n 100000 -c 64 -k http://localhost:3000/ > output_nodejs_nginx_lb.txt




ab -n 100000 -c 64 -k http://140.238.183.198:3000/ > output_nodejs_nginx_lb.txt