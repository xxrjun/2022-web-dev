const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  googleID: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
  },

  // local ID
  email: {
    type: String,
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 1024,
  },
});

module.exports = mongoose.model("User", userSchema);
