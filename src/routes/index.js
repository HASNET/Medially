var router=require('express').Router();
//require('./routes/customer.routes.js')(app);
//app.use(cors());
const jwt = require('jsonwebtoken');
router.use('/api',require('./api'));
router.use('/hospital',require('./hospital'));

//require('./hospital')(router);
//hospital/registerHospital.js

//var cors = require('cors');
//router.all('*',cors())
/*
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
/*
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(res);
  next();
});


router.get('/hospitalAll', (req, res) => {
   res.status(200).send('hello All Hospital!');
});

router.get("/ht", verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Welcome to Customer Management System'
      });
    }
  });
});
//app.use('/',router)

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

module.exports = router;
