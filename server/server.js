require('dotenv').config();
const path = require('path');

const express = require('express');
const http      = require('http');
const https     = require('https');
const fs        = require('fs');
const app       = require('./app');
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));



const options = {
   key: fs.existsSync(process.env.SSL_KEY)? fs.readFileSync(process.env.SSL_KEY):null,
   cert: fs.existsSync(process.env.SSL_CRT)? fs.readFileSync(process.env.SSL_CRT):null,
};

const server =  process.env.MODE === "DEV" ? http.createServer(app) : https.createServer(options,app);


server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});





