const { User, Post, Comment, Category } = require("../models");
const IndexController = {
  dashboard(req, res) {
    res.render("pages/admin/dashboard");
  },
  async listPost(req, res) {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: Category,
            as: "category",
            required: true,
          },
          {
            model: User,
            as: "user",
            required: true,
          },
          {
            model: Comment,
            as: "comments",
            required: true,
          },
        ],
      });
      console.log(posts);
      return res.render("pages/admin/list-posts");
      // && res.status(200).json(posts)
    } catch (error) {
      console.log(error);
    }
  },
  viewPost(req, res) {
    res.render("pages/admin/view-post");
  },
  addPost(req, res) {
    res.render("pages/admin/add-post");
  },
  editPost(req, res) {
    res.render("pages/admin/edit-post");
  },
  deletePost(req, res) {
    res.render("pages/admin/delete-post");
  },
  noPosts(req, res) {
    res.render("pages/admin/no-posts");
  },
};
module.exports = IndexController;
