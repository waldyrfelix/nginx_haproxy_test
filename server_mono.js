const fs = require('fs')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    fs.readFile('data.txt', 'utf8', (e, data) => {
        res.json(JSON.parse(data));
    })
})

app.listen(80, () => {
    console.log('Example app listening on port 80!');
})