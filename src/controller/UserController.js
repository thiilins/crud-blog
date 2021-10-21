const { User, Post, Comment } = require("../models");
const errors = require("./errors");
const bcrypt = require("bcryptjs");

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
        error: error.errors[0].message,
        exception: error.parent.sqlMessage,
      });
    }
  },
  async createUser(req, res) {
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
  async editUser(req, res) {
    try {
      const { id } = req.body;
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
      return res.status(200).json(userUpdated);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.destroy({
        where: { id },
      });
      return res.status(200).json({
        Message: "Usuário Removido com Sucesso",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = UserController;
