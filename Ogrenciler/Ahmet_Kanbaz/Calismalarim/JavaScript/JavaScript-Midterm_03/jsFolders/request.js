class Request {
  static showAllBlogsFromRequest = function() {
    const blogs = crud.get();
    blogs.then((response) => {
      response.map((blog) => UI.createNewBlogToUI(blog));
    })
    .catch((error) => UI.alertMessage(error));
  }

  static addNewBlogToRequest = function(blog) {
    const newBlog = crud.post(blog);
    newBlog.then((response) => UI.createNewBlogToUI(response))
    .catch((error) => UI.alertMessage(error));
  }

  static deleteBlogFromRequest = function(deleteBlogId) {
    crud.delete(deleteBlogId);
  }

  static getBlogDetailFromRequest = function(getDetailBlogId) {
    const detailBlog = crud.getSingleBlog(getDetailBlogId);
    detailBlog
      .then((response) => UI.detailBlogToUI(response))
      .catch((error) => UI.alertMessage(error));
  }
}