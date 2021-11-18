const express = require("express");
const router = express.Router();
const CommentController = require("../controller/CommentController");
const isLogin = require("../middlewares/auth");
const acessLevel = require("../middlewares/acessLevel");

//Rota aberta
router.get("/", CommentController.listComments);

//Necessário autenticação
//router.use(isLogin)
//router.use(acessLevel)
router.post("/", CommentController.createComment);
router.put("/:id", CommentController.editComment);
router.delete("/:id", CommentController.deleteComment);

module.exports = router;
