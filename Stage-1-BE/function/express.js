const express = require('express');
const serverless = require('serverless-http');
const mainApp = require('../app'); 

const app = express();

app.use('/', mainApp);

module.exports.handler = serverless(app);