const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const favoriteSchema = require('./Favorite');
require('dotenv').config();

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i, 
      'Please enter a valid email address.'
  ]
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: [
      /^([a-z0-9_\.-!@#$%^&*\{\}\[\]\(\)\\\/=~`]+)/i,
      'Your password contains unallowed characters.'
    ]
  },
  favorites: [favoriteSchema]
},
{ timestamps: true });

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = process.env.SALT_ROUNDS;
    this.password = bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;