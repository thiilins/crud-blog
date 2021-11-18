const { Category, Post } = require("../models");

const CategoryController = {
  async listCategory(req, res) {
    try {
      const categories = await Category.findAll({
        order: [["id", "ASC"]],
      });
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async createCategory(req, res) {
    try {
      const { name } = req.body;
      const NewCategory = await Category.create({
        name,
        enable: 1,
      });
      return res.status(201).json(NewCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async editCategory(req, res) {
    try {
      const { id } = req.params;
      const { name, enable } = req.body;
      const categoryUpdated = await Category.update(
        {
          name,
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
  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.destroy({
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

module.exports = CategoryController;
