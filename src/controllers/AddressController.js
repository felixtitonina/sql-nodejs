const Address = require("../models/Address");
const User = require("../models/User");
const { use } = require("../routes");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });
    // const address = await Address.findAll({ whare: { user_id } });

    return res.status(200).json(user.addresses);
    // return res.status(200).json(address);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id,
    });
    return res.status(201).json(address);
  },
};
