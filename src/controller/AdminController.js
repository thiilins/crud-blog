const { User, Post, Comment, Category } = require("../models");

const IndexController = {
  dashboard(req, res) {
    res.render("admin/dashboard", { file: "dashboard", page: "Painel" });
  },
  async addPost(req, res) {
    try {
      const categories = await Category.findAll();
      const users = await User.findAll();
      res.render("admin/dashboard", {
        categories,
        users,
        file: "add",
        page: "Adicionar Post",
      });
    } catch (error) {
      console.log(erro);
    }
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
      return res.render("admin/dashboard", {
        file: "edit",
        page: `Editar: ${post.title}`,
        post,
        categories,
        users,
      });
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

      return res.render("admin/dashboard", {
        file: "delete",
        page: `Excluir: ${post.title}`,
        post,
      });
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
