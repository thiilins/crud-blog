const { User, Post, Comment, Category } = require("../models");

const IndexController = {
  dashboard(req, res) {
    res.render("admin/dashboard");
  },
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
          },
        ],
      });
      return res.render("admin/view-post", { post });
    } catch (error) {
      console.log(error);
      return res.render("admin/view-post", { error });
    }
  },
  addPost(req, res) {
    res.render("admin/add-post");
  },
  async editPost(req, res) {
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
          },
        ],
      });
      const categories = await Category.findAll();
      const users = await User.findAll();
      console.log(categories);
      return res.render("admin/edit-post", { post, categories, users });
    } catch (error) {
      console.log(error);
      return res.render("admin/view-post", { error });
    }
  },
  async deletePost(req, res) {
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
          },
        ],
      });

      return res.render("admin/delete-post", { post });
    } catch (error) {
      console.log(error);
      return res.render("admin/delete-post", { error });
    }
  },
  noPosts(req, res) {
    return res.render("admin/no-posts");
  },
};
module.exports = IndexController;
