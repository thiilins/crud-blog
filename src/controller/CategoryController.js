const { Category, Comment, User, Post } = require("../models");

const CategoryControllerApi = {
  async listCategory(req, res) {
    try {
      const categories = await Category.findAll({
        order: [["id", "ASC"]],
      });
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async createCategory(req, res) {
    try {
      const { name } = req.body;
      const NewCategory = await Category.create({
        name,
        enable: 1,
      });
      return res.status(200).json(NewCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async editCategory(req, res) {
    try {
      const { id } = req.body;
      const { name, enable } = req.body;
      const categoryUpdated = await Category.update(
        {
          name,
          enable,
        },
        { where: { id } }
      );
      return res.status(200).json(categoryUpdated);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async deleteCategory(req, res) {
    try {
      const category = await Category.destroy({
        where: { id },
      });
      return res.status(200).json({
        Message: "Categoria Removida com Sucesso",
        category,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

module.exports = { CategoryController, CategoryControllerApi };
