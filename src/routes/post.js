const express = require("express");
const router = express.Router();
const uploadFile = require("../middlewares/upload-file");
const PostController = require("../controller/PostController");
const isLogin = require("../middlewares/auth");
const acessLevel = require("../middlewares/acessLevel");

router.get("/", PostController.listPost);
router.get("/:id", PostController.viewPost);

//Necessário autenticação
//router.use(isLogin)
//router.use(acessLevel)
router.post("/", uploadFile.single("featured_img"), PostController.createPost);
router.put("/:id", uploadFile.single("featured_img"), PostController.editPost);
router.delete("/:id", PostController.deletePost);

module.exports = router;
