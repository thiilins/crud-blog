const { User, Post, Comment } = require("../models");

const IndexController = {
  async index(req, res) {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            as: "user",
            required: true,
          },
          {
            model: Category,
            as: "category",
            required: false,
          },
          {
            model: Comment,
            as: "comments",
            required: false,
          },
        ],
      });
      return res.render("pages/index", { posts });
    } catch (error) {
      console.log(error);
      return res.render("pages/index", { error });
    }
  },
  async viewPost(req, res) {
    const { id } = req.params;
    try {
      const post = await Post.findByPk(id, {
        include: [
          {
            model: Category,
            as: "category",
            required: false,
          },
          {
            model: User,
            as: "user",
            required: true,
          },
          {
            model: Comment,
            as: "comments",
            required: false,
          },
        ],
      });
      res.render("pages/post", { post });
    } catch (error) {
      console.log(error);
      return res.render("pages/post", { error });
    }
  },
  login(req, res) {
    res.render("pages/login");
  },
};
module.exports = IndexController;
