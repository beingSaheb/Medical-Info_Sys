const mongoose = require('mongoose');
const Schema = mongoose.Schema
// const passportLocalMongoose = require("passport-local-mongoose");

// Define the patient schema
const signup = new mongoose.Schema({  
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
  },   
  dob: {
    type: Date,
    required: true
  },
  phone: {
    type: Number,
    required: true
},
  email: {
    type:[String],
    required: true,
    unique:true
  },
password: {
    type: [String],
    required: true,
  },

});
module.exports = mongoose.model('signup', signup);