"user strict"

const express = require('express');
const http = require('http');
const path = require('path');

const api = express();
api.use('/', express.static(path.join(__dirname, 'public')));

const server = http.createServer(api);
console.log("LOG")

server.listen(8080);

console.log("LOG")