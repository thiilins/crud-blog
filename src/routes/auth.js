const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");
const uploadFile = require("../middlewares/upload-file");

router.get("/login", AuthController.loginPage);
router.get("/cadastro", AuthController.registerPage);
router.post("/login", AuthController.login);
router.post("/register", uploadFile.single("avatar"), AuthController.register);
module.exports = router;
