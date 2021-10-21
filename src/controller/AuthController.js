const { User, Post, Comment } = require("../models");

const IndexController = {
  login(req, res) {
    res.render("pages/login");
  },
};
module.exports = IndexController;
