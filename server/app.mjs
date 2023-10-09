// UserModel.js

const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields like name, dateOfBirth, etc. as needed
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
