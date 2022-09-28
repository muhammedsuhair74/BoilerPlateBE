const { json } = require("body-parser");
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


// const registerSchema = Joi.object({
//   username: Joi.string().min(4),
//   password: Joi.string().min(5)
// });

const login = async(req, res) => {
  const {fname, password} = req.body;
  await User.findOne({fname: fname}).then(async (user)=>{
    if(user && user.fname === fname) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if(!isPasswordValid) {
        return res.status(400).send("Incorrect Password");
      } else {
        const token = jwt.sign({_id: user.fname}, process.env.TOKEN_SECRET);
        const resData = {
          "authToken": token,
          "userName" : fname,
          "email": user.email
        };
        res.header("auth-token", token).send(resData);
        // return res.status(200).send("Success");
      }
    } else {
      res.status(404).send("sorry");
    }
  }).catch(err => {
    res.status(500).send(err)
  })
}

module.exports = login;