const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");

router.get("/", AdminController.dashboard);
router.get("/posts", AdminController.listPost);
router.get("/ver", AdminController.viewPost);
router.get("/adicionar", AdminController.addPost);
router.get("/editar", AdminController.editPost);
router.get("/deletar", AdminController.deletePost);
router.get("/sem-posts", AdminController.noPosts);

module.exports = router;
