const { json } = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// const Joi = require("@hapi/joi");

// const registerSchema = Joi.object({
//   fname: Joi.string().min(3).required(),
//   lname: Joi.string().min(3).required(),
//   email: Joi.string().min(6).required().email(),
//   password: Joi.string().min(6).required()
// })

const signup = async(req,res)=> {
  // const {fname, password} = req.body;
  const fname = req.body.fname;
  const password = req.body.password;
  const email = 'abc@gmail.com';
  const lname = 'suhair';
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    fname: fname,
    lname: lname,
    email: email,
    password: hashedPassword,
  });

  try{
    // const value = await registerSchema.validateAsync({fname, lname, email, password});
    if(false) {
      res.sendStatus(400).send(error.details[0].message);
      return;
    } else {
      await user.save().then((err)=>{
        res.sendStatus(200).send("User registered successfully");
      }).catch((err => {
        res.sendStatus(400).send("Something went wrong!");
      }));
      // const us = User.find({fname : fname}).then(item => {
      // }).catch(err => {
      // });
      // res.sendStatus(200);
    }
  } catch {(error) => {
    res.sendStatus(500).send(error);
  }}
}
module.exports = signup;