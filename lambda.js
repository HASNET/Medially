'use strict'
//This file is AWS Lambda entry point
//All your business code (ExpressJS App) should be done in src/app.js

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app.js');
const server = awsServerlessExpress.createServer(app)

//module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
module.exports.handler = (event, context, callback) => {
    try {
        //prevent timeout from waiting event loop
        context.callbackWaitsForEmptyEventLoop = false;
        context.succeed = (response) => {
			console.log(response);
			callback(null, response);
        };
        return awsServerlessExpress.proxy(server, event, context);
    } catch (error) {
        console.error('=====> Error: ', error)
    }
}