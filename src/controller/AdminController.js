const IndexController = {
  dashboard(req, res) {
    res.render("pages/admin/dashboard");
  },
  listPost(req, res) {
    res.render("pages/admin/list-posts");
  },
  viewPost(req, res) {
    res.render("pages/admin/view-post");
  },
  addPost(req, res) {
    res.render("pages/admin/add-post");
  },
  editPost(req, res) {
    res.render("pages/admin/edit-post");
  },
  deletePost(req, res) {
    res.render("pages/admin/delete-post");
  },
  noPosts(req, res) {
    res.render("pages/admin/no-posts");
  },
};
module.exports = IndexController;
