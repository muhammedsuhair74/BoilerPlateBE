const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
    min: 6,
    max:255
  },
  lname: {
    type: String,
    require: true,
    min: 6,
    max:255
  },
  email: {
    type: String,
    require: true,
    min: 6,
    max:255
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max:1024
  },
  date: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('User', userSchema);