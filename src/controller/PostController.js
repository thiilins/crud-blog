const { Category, Comment, User, Post } = require("../models");

const PostController = {
  async listPost(req, res) {
    try {
      const posts = await Post.findAll(
        {
          include: [
            {
              model: User,
              as: "user",
              required: false,
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
        },
        {
          order: [["id", "ASC"]],
        }
      );
      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async viewPost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
            required: false,
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

            include: {
              model: User,
              as: "user",
              required: false,
            },
          },
        ],
      });
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async createPost(req, res) {
    try {
      const enable = 1;
      const { user_id, title, content, category_id } = req.body;
      let featured_img = "default.jpg";
      if (req.file && req.files != "undefined") {
        const { filename } = req.file;
        featured_img = filename;
      }
      const newPost = await Post.create({
        user_id,
        title,
        featured_img,
        content,
        category_id,
        enable,
      });
      return res.status(201).json(newPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async editPost(req, res) {
    try {
      const { id } = req.params;
      let featured_img = undefined;
      const { user_id, title, content, category_id, enable } = req.body;
      if (req.file && req.files != "undefined") {
        const { filename } = req.file;
        featured_img = filename;
      }
      const postUpdated = await Post.update(
        {
          user_id,
          title,
          featured_img,
          content,
          category_id,
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
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.destroy({
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
module.exports = PostController;
