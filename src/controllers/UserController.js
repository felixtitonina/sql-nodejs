const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.status(201).json(user);
  },
  async find (req, res) { 

   const user = await User.findAll()

   return res.status(200).json(user)
  }
}
