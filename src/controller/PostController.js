const { Category, Comment, User, Post } = require("../models");

const PostControllerAdmin = {
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

      return res.render("admin/list-posts", { posts });
    } catch (error) {
      console.log(error);
      return res.render("admin/list-posts", { error });
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
      // return res.status(200).json(post);
      return res.render("admin/view-post", { post });
    } catch (error) {
      console.log(error);
      return res.render("admin/view-post", { error });
    }
  },
  async createPost(req, res) {
    try {
      const { user_id, title, content, category_id } = req.body;
      const featured_img = req.file.filename;
      if (!featured_img) {
        featured_img = "default.jpg";
      }
      const newPost = await Post.create({
        user_id,
        title,
        featured_img,
        content,
        category_id,
        enable: 1,
      });
      return res.redirect("/admin/post");
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async editPost(req, res) {
    try {
      const { id } = req.params;
      const { user_id, title, content, category_id, enable } = req.body;
      if (!req.files) {
        const featured_img = req.files.filename;
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
const PostController = {
  async indexListPost(req, res) {
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
  async indexViewPost(req, res) {
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
};
module.exports = { PostController, PostControllerAdmin };

