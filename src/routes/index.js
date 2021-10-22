const express = require("express");
const router = express.Router();
const { PostController } = require("../controller/PostController");
const { CommentController } = require("../controller/CommentController");
const AuthController = require("../controller/AuthController");
router.get("/", PostController.indexListPost);
router.get("/post/:id?", PostController.indexViewPost);
router.post("/comment/:id", CommentController.createComment);
//Redirecionamentos
router.get("/login", AuthController.redirectLogin);
router.get("/cadastro", AuthController.redirectRegister);

module.exports = router;
