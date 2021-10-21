const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");

router.get("/", AdminController.dashboard);
router.get("/posts", AdminController.listPost);
router.get("/post/ver/:id", AdminController.viewPost);
router.get("/post/adicionar-post", AdminController.addPost);
router.get("/post/editar/:id", AdminController.editPost);
router.get("/post/deletar/:id?", AdminController.deletePost);
router.get("/sem-posts", AdminController.noPosts);

module.exports = router;
