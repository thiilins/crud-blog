const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/user", UserController.listUsers);
router.post("/user", UserController.createUser);
router.put("/user", UserController.editUser);
router.delete("/user", UserController.deleteUser);

module.exports = router;
