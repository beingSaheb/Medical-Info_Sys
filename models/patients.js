const mongoose = require('mongoose');

// Define the patient schema
const patientSchema = new mongoose.Schema({
  id:{
    type: Number,
    unique: true
  },  
  name: {
    type: String,
    required: true
  },
  mobile_No: {
    type: Number,
    required: true,
    unique: true
  },   
  dateOfBirth: {
    type: Date,
    required: true
  },
  age: {
    type: Number
  },
  weight: {
    type: Number
  },
  medicalHistory: {
    type: String
  },
  medications: {
    type: [String]
  },
  allergies: {
    type: [String]
  },
  address: {
    type: String
  }
});

// Create and export the patient model
module.exports = mongoose.model('Patient', patientSchema);
