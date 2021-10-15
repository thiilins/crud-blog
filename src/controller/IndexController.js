const IndexController = {
  index(req, res) {
    res.render("pages/index");
  },
  login(req, res) {
    res.render("pages/login");
  },
};
module.exports = IndexController;
