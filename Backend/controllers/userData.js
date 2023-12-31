const { default: mongoose } = require("mongoose");
const User = require("../models/userData");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.errors.email.message);
  }
};
const findUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ msg: "please enter a valid username" });
    }
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ msg: "user not found" });
  }
};

module.exports = {
  createUser,
  findUser,
};
