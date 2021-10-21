const express = require("express");
const router = express.Router();
const IndexController = require("../controller/IndexController");

router.get("/", IndexController.index);
router.get("/login", IndexController.login);
router.get("/post/:id", IndexController.viewPost);

module.exports = router;
