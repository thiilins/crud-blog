const { Category, Comment, User, Post } = require("../models");

const PostController = {
  async listPosts(req, res) {
    try {
      const posts = await Post.findAll({
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
      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
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
      return res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async editPost(req, res) {
    try {
      const { id } = req.body;
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
      return res.status(200).json(postUpdated);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async deletePost(req, res) {
    try {
      const post = await Post.destroy({
        where: { id },
      });
      return res.status(200).json({
        Message: "Usuário Removido com Sucesso",
        post,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = PostController;
