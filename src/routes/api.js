const express = require("express");
const router = express.Router();
const PostController = require("../controller/PostController");
const CommentController = require("../controller/CommentController");
const CategoryController = require("../controller/CategoryController");
const UserController = require("../controller/UserController");
// POST
router.get("/post", PostController.listPosts);
router.post("/post", PostController.createPost);
router.put("/post", PostController.editPost);
router.delete("/post", PostController.deletePost);
//COMMENT
router.get("/comment", CommentController.listComments);
router.post("/comment", CommentController.createComment);
router.put("/comment", CommentController.editComment);
router.delete("/comment", CommentController.deleteComment);
// CATEGORY
router.get("/category", CategoryController.listCategory);
router.post("/category", CategoryController.createCategory);
router.put("/category", CategoryController.editCategory);
router.delete("/category", CategoryController.deleteCategory);
//USER
router.get("/user", UserController.listUsers);
router.post("/user", UserController.createUser);
router.put("/user", UserController.editUser);
router.delete("/user", UserController.deleteUser);
module.exports = router;
