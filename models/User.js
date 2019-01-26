const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "Please enter a username"
  },
  password: {
      type: String,
      unique: false,
      required: "Please enter a password"
  }
});



// This creates our model from the above schema, using Mongoose's model method
var User = mongoose.model('User', UserSchema);

// Export the Tweet model
module.exports = User;