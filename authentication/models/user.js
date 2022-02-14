const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
  },
  password: {
    type: String,
    minlength: 5,
  },
});

const User = new mongoose.model("Users", userSchema);
module.exports = User;
