const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");

router.get("/", AdminController.dashboard);
router.get("/posts", AdminController.listPost);
router.get("/ver/:id", AdminController.viewPost);
router.get("/adicionar", AdminController.addPost);
router.get("/editar/:id", AdminController.editPost);
router.get("/deletar/:id", AdminController.deletePost);
router.get("/sem-posts", AdminController.noPosts);

module.exports = router;
