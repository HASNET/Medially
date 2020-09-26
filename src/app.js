const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(require('./routes'))


        app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
        });

    //GET
        app.get('/', (req, res) => {
           res.status(200).send('hello world!');
        });



        app.post('/login', (req, res) => {
	        console.log("User:" + req.headers.username);
	        console.log("Password:" + req.headers.password);
	        
	        
	        if (req.headers.username == undefined || req.headers.password == undefined) {
		        res.json('Error in Login 1');
		        return;
	        }
	        if (req.headers.username !== 'admin' || req.headers.password !== 'has2020') {
		        res.json('Error in Login 2');
		        return;
	        }
	        
          // Mock user
          const user = {
            id: 1, 
            username: req.headers.username,
            email: req.headers.password
          }

          jwt.sign({user}, 'secretkey', { expiresIn: '1800s' }, (err, token) => {
            res.json({
              token
            });
          });
        });
/*
// Verify Token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
	res.status(403).send({message: 'Please Provide valid Credentials'});
  }
}
*/

//app.use('/',router);
module.exports = app;
