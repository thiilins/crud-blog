const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");
const { PostController } = require("../controller/PostController");

router.get("/", PostController.indexListPost);
router.get("/post/:id?", PostController.indexViewPost);

router.get("/login", AuthController.login);

module.exports = router;
