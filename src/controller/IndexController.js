const IndexController = {
  index(req, res) {
    res.render("pages/index");
  },
  login(req, res) {
    res.render("pages/login");
  },
  viewPost(req, res) {
    res.render("pages/post");
  },
};
module.exports = IndexController;
