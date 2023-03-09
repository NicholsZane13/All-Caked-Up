const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
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
      /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!?#%@$^&*(){}[\]\+=\-_]*[!?#%@$^&*(){}[\]\+=\-_])[A-Za-z0-9!?#%@$^&*(){}[\]\+=\-_]{8,32}$/,
      'Your password contains unallowed characters.'
    ]
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isSuper: {
    type: Boolean,
    default: false
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
},
{ timestamps: true });

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const rounds = process.env.SALT_ROUNDS;
    const salt = await bcrypt.genSalt(Number(rounds));
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;