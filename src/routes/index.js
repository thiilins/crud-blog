const express = require("express");
const router = express.Router();
const IndexController = require("../controller/IndexController");

router.get("/", IndexController.index);
router.get("/login", IndexController.login);
module.exports = router;
