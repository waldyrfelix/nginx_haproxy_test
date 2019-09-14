const fs = require('fs')
const express = require('express')
const cluster = require('cluster')

const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function (id) {
        console.log("I am running with ID : " + cluster.workers[id].process.pid);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    const app = express()

    app.get('/', (req, res) => {
        fs.readFile('data.txt', 'utf8', (e, data) => {
            res.json(JSON.parse(data));
        })
    })

    app.listen(80, () => {
        console.log('Example app listening on port 3000!');
    })
}