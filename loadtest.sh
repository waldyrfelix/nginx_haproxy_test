ab -n 100000 -c 64 -k http://localhost:3000/ > output_nodejs_one_process.txt
ab -n 100000 -c 64 -k http://localhost:3000/ > output_nodejs_cluster_process.txt