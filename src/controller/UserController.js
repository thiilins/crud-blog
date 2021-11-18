const { User, Post, Comment } = require("../models");
const crypto = require("../helpers/crypto");

const UserController = {
  async listUsers(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const user = await User.findByPk(id);
        user
          ? res.status(200).json(user)
          : res.status(200).json({
              error: errors.userNotFound,
            });
      } else {
        const users = await User.findAll({
          order: [["username", "ASC"]],
        });
        return res.status(200).json(users);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async createUser(req, res) {
    try {
      const { fullname, username, password, github, linkedin, bio } = req.body;
      let avatar = "default_avatar.jpg";
      const hash = crypto.create(password);
      if (req.file && req.files != "undefined") {
        const { filename } = req.file;
        avatar = filename;
      }
      const user = await User.create({
        fullname,
        username,
        password: hash,
        avatar,
        github,
        linkedin,
        bio,
        enable: 1,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async editUser(req, res) {
    try {
      const { id } = req.params;
      const {
        fullname,
        username,
        password,
        avatar,
        github,
        linkedin,
        bio,
        enable,
      } = req.body;
      if (password) {
        password = bcrypt.hashSync(password, 10);
      }
      const userUpdated = await User.update(
        {
          fullname,
          username,
          password,
          avatar,
          github,
          linkedin,
          bio,
          enable,
        },
        { where: { id } }
      );
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.destroy({
        where: { id },
      });
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
};
module.exports = UserController;
