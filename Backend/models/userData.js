const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please enter a valid email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "no password given"],
  },
});

module.exports = mongoose.model("User", userSchema);
