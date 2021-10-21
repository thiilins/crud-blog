const { Category, Comment, User, Post } = require("../models");

const PostController = {
  async createPost(req, res) {
    try {
      const { user_id, title, content, category_id } = req.body;
      const newPost = await Post.create({
        user_id,
        title,
        content,
        category_id,
        enable: 1,
      });
      return res.redirect("/admin/post");
      return res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async editPost(req, res) {
    try {
      const { id } = req.params;
      const { user_id, title, content, category_id, enable } = req.body;
      const postUpdated = await Post.update(
        {
          user_id,
          title,
          content,
          category_id,
          enable,
        },
        { where: { id } }
      );
      return res.redirect("/admin/post");
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async deletePost(req, res) {
    const { id } = req.params;
    try {
      const post = await Post.destroy({
        where: { id },
      });

      return res.redirect("/admin/post");
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = PostController;
