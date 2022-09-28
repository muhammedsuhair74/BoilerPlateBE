const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
  const token = res.header('auth-token');
  if(!token) {
    res.status(401).send("Access denied");
  }
  try{
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};