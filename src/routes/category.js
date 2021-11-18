const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/CategoryController");
const isLogin = require("../middlewares/auth");
const acessLevel = require("../middlewares/acessLevel");

router.get("/", CategoryController.listCategory);
//Necessário autenticação
//router.use(isLogin)
//router.use(acessLevel)
router.post("/", CategoryController.createCategory);
router.put("/:id", CategoryController.editCategory);
router.delete("/:id", CategoryController.deleteCategory);
module.exports = router;
