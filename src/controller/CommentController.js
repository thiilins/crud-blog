const { Category, Comment, User, Post } = require("../models");

const CommentController = {
  async listComments(req, res) {
    try {
      const comments = await Comment.findAll({
        order: [["post_id", "ASC"]],
      });
      return res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async createComment(req, res) {
    try {
      const { user_id, post_id, comment } = req.body;
      const NewComment = await Comment.create({
        user_id,
        post_id,
        comment,
        enable: 1,
      });
      return res.status(200).json(NewComment);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async editComment(req, res) {
    try {
      const { id } = req.body;
      const { user_id, post_id, comment, enable } = req.body;
      const commentUpdated = await Comment.update(
        {
          user_id,
          post_id,
          comment,
          enable,
        },
        { where: { id } }
      );
      return res.status(200).json(commentUpdated);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  async deleteComment(req, res) {
    try {
      const comment = await Comment.destroy({
        where: { id },
      });
      return res.status(200).json({
        Message: "Comentário Removido com Sucesso",
        comment,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = CommentController;
