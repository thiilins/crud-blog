const express = require("express");
const router = express.Router();
const uploadFile = require("../middlewares/upload-file");
const UserController = require("../controller/UserController");
const isLogin = require("../middlewares/auth");
const acessLevel = require("../middlewares/acessLevel");
//Necessário autenticação
//router.use(isLogin)
//router.use(acessLevel)
router.get("/:id", UserController.listUsers);
router.post("/", uploadFile.single("avatar"), UserController.createUser);
router.put("/", UserController.editUser);
router.delete("/", UserController.deleteUser);

module.exports = router;
