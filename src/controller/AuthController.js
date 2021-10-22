const { User } = require("../models");

const IndexController = {
  loginPage(req, res) {
    res.render("pages/login");
  },
  registerPage(req, res) {
    res.render("pages/register");
  },
  redirectLogin(req, res) {
    res.redirect("/auth/login");
  },
  redirectRegister(req, res) {
    res.redirect("/auth/cadastro");
  },
  async login(req, res) {
    res.redirect("/admin");
  },
  async register(req, res) {
    try {
      const { fullname, username, password, github, linkedin, bio } = req.body;
      let avatar = "default_avatar.jpg";
      const hash = bcrypt.hashSync(password, 10);
      if (req.file && req.files != "undefined") {
        const { filename } = req.file;
        avatar = filename;
      }
      const user = await User.create({
        fullname,
        username,
        password: hash,
        avatar,
        github,
        linkedin,
        bio,
        enable: 1,
      });
      return res.redirect("/login");
    } catch (error) {
      console.log(error);
      return res.render("pages/login", { error });
    }
  },
};
module.exports = IndexController;
