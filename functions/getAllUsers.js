const User = require("../models/User");

module.exports = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server error");
  }
};
