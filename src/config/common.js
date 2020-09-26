function Common(){}

Common.prototype.verifyToken=  function(req, res, next) {
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

module.exports= new Common()
