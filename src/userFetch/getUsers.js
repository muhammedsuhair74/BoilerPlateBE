const User = require('../../models/User');

const getUser = (req,res) => {
  const users = Users.find();
  res.status(200).send(users);
}

module.exports = getUser;