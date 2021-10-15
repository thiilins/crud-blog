const { User } = require("../models");
const errors = require("./errors");
const bcrypt = require("bcrypt");

const UserController = {
  async register(req, res) {
    try {
      const { fullname, username, password, github, linkedin, bio } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        fullname,
        username,
        password: hash,
        avatar: null,
        github,
        linkedin,
        bio,
        enable: 1,
        created_at: null,
        updated_at: null,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: error.errors[0].message,
        exception: error.parent.sqlMessage,
      });
    }
  },
  async listUsers(req, res) {
    const { id } = req.params;
    if (id) {
      try {
        const user = await User.findByPk(id);
        user
          ? res.status(200).json(user)
          : res.status(200).json({
              error: errors.userNotFound,
            });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          error: error.errors[0].message,
          exception: error.parent.sqlMessage,
        });
      }
    } else {
      const users = await User.findAll();
      return res.status(200).json(users);
    }
  },
};
module.exports = UserController;
