const express = require("express");
const router = express.Router();
const uploadFile = require("../middlewares/upload-file");

// CONTROLLERS
const AdminController = require("../controller/AdminController");
const { PostControllerAdmin } = require("../controller/PostController");
const { CommentControllerAdmin } = require("../controller/CommentController");
const UserController = require("../controller/UserController");
const CategoryController = require("../controller/CategoryController");

/**********************
 * VIEWS E FRONT
 **********************/

// POST
router.get("/", AdminController.dashboard);
router.get("/post/adicionar", AdminController.addPost);
router.get("/post/:id/editar/", AdminController.editPost);
router.get("/post/:id/deletar/", AdminController.deletePost);
router.get("/sem-posts", AdminController.noPosts);

/**********************
 * ACTIONS
 **********************/

//POST
router.get("/post", PostControllerAdmin.listPost);
router.get("/post/:id?", PostControllerAdmin.viewPost);
router.delete("/post/:id", PostControllerAdmin.deletePost);
router.put(
  "/post/:id",
  uploadFile.single("featured_img"),
  PostControllerAdmin.editPost
);
router.post(
  "/post",
  uploadFile.single("featured_img"),
  PostControllerAdmin.createPost
);

//COMMENTS
router.post("/comments", CommentControllerAdmin.createComment);
router.get("/comments/:id?", CommentControllerAdmin.listComments);
router.put("/comments/:id?", CommentControllerAdmin.editComment);
router.delete("/comments/:id?", CommentControllerAdmin.deleteComment);

//CATEGORY
router.post("/category", CategoryController.createCategory);
router.get("/category/:id?", CategoryController.listCategory);
router.put("/category/:id?", CategoryController.editCategory);
router.delete("/category/:id?", CategoryController.deleteCategory);

//USERS
router.post("/user", UserController.createUser);
router.get("/user/:id?", UserController.listUsers);
router.put("/user/:id?", UserController.editUser);
router.delete("/user/:id?", UserController.deleteUser);

module.exports = router;
