const express = require("express");
const router = express.Router();

// CONTROLLERS
const AdminController = require("../controller/AdminController");
const PostController = require("../controller/PostController");
const CommentsController = require("../controller/CommentController");
const UserController = require("../controller/UserController");
const CategoryController = require("../controller/CategoryController");

/**********************
 * VIEWS E FRONT
 **********************/
// POST
router.get("/", AdminController.dashboard);
router.get("/post", AdminController.listPost);
router.get("/post/ver/:id?", AdminController.viewPost);
router.get("/post/adicionar", AdminController.addPost);
router.get("/post/editar/:id?", AdminController.editPost);
router.get("/post/deletar/:id", AdminController.deletePost);
router.get("/sem-posts", AdminController.noPosts);

/**********************
 * ACTIONS
 **********************/

//POST
router.delete("/post/:id", PostController.deletePost);
router.put("/post/:id", PostController.editPost);
router.post("/post", PostController.createPost);
//COMMENTS
router.post("/comments", CommentsController.createComment);
router.get("/comments/:id?", CommentsController.listComments);
router.put("/comments/:id?", CommentsController.editComment);
router.delete("/comments/:id?", CommentsController.deleteComment);

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
