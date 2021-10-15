const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.post("/registrar", UserController.register);
router.get("/usuario/:id?", UserController.listUsers);
module.exports = router;
