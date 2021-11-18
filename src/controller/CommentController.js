const { Comment, User, Post } = require("../models");

const CommentController = {
  async listComments(req, res) {
    try {
      const comments = await Comment.findAll({
        order: [["post_id", "ASC"]],
      });
      return res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
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
      return res.status(201).json(NewComment);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Ops, não foi possível processar sua solicitação no momento!",
      });
    }
  },
  async editComment(req, res) {
    try {
      const { id } = req.params;
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
      const { id } = req.params;
      const comment = await Comment.destroy({
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
module.exports = CommentController;
