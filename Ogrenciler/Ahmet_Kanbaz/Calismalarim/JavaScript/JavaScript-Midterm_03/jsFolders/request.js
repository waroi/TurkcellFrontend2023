class Request {
  static showAllBlogsFromRequest = function() {
    const blogs = crud.get();
    blogs.then((response) => {
      response.map((blog) => {
        UI.createNewBlogToUI(blog);
      });
    })
    .catch((error) => UI.alertMessage(error));
    UI.showFilterCategories();
  }

  static addNewBlogToRequest = function(blog) {
    const newBlog = crud.post(blog);
    newBlog.then((response) => UI.createNewBlogToUI(response))
    .catch((error) => UI.alertMessage(error));
    UI.showFilterCategories();
  }

  static getBlogDetailFromRequest = function(getDetailBlogId) {
    Filter.getCheckedCategory();
    const detailBlog = crud.getSingleBlog(getDetailBlogId);
    detailBlog
      .then((response) => UI.detailBlogToUI(response))
      .catch((error) => UI.alertMessage(error));
  }

  static updateBlogDetailFromRequest = function(updateBlogId) {
    const updateBlog = crud.getSingleBlog(updateBlogId);
    updateBlog
      .then((response) => UI.updateBlogToUI(response))
      .catch((error) => UI.alertMessage(error));
  }

  static updateBlogFromRequest = function(updateBlogId, updateBlog) {
    const updatedBlog = crud.put(updateBlogId, updateBlog);
    updatedBlog
      .then((response) => {
        UI.toastMessage('Blog Başarılı Bir Şekilde Güncellendi.');
        location.reload();
      })
      .catch((error) => UI.alertMessage(error));
  }

  static deleteBlogFromRequest = function(deleteBlogId) {
    crud.delete(deleteBlogId);
    UI.showFilterCategories();
  }

  static getBlogsFromRequestForCategory = function(category) {
    const filterBlogsWithCategory = [];
    const blogs = crud.get();
    blogs.then((response) => {
      response.map((blog) => {
        if (blog.category === category) {
          filterBlogsWithCategory.push(blog);
        }
      });
    })
    .catch((error) => UI.alertMessage(error));
    return filterBlogsWithCategory;
  }
}