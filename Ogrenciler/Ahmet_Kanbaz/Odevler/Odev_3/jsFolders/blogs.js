class Blogs {
  constructor(id, name, author, category, content, imageUrl, date) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.category = category;
    this.content = content;
    this.imageUrl = imageUrl;
    this.date = date;
  }

  static addBlog = function (e) {
    const id = Date.now();
    const name = modalBlogName.value.trim();
    const author = modalAuthorName.value.trim();
    const category = modalBlogCategoryName.value.trim();
    const content = modalBlogContent.value.trim();
    const imageUrl = modalBlogImageUrl.value.trim();
    const currentDate = new Date();
    const date =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear() +
      " " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();

    if (name && author && category && content && imageUrl) {
      UI.clearModalForm();
      const blog = new Blogs(
        id,
        name,
        author,
        category,
        content,
        imageUrl,
        date
      );
      Request.addNewBlogToRequest(blog);
    } else {
      UI.alertMessage("Lütfen tüm alanları doldurunuz ve Tekrar Deneyiniz.");
      UI.clearModalForm();
    }
    e.preventDefault();
  };

  static detailBlog = function(e) {
    if(e.target.classList.contains('fa-eye')) {
      const detailBlogId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
      Request.getBlogDetailFromRequest(detailBlogId);
    }
    e.preventDefault();
  }

  static updateBlog = function(e) {
    if(e.target.classList.contains('fa-edit')) {
      const updateBlogId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
      Request.updateBlogDetailFromRequest(updateBlogId);
    }
    e.preventDefault();
  }

  static deleteBlog = function(e) {
    if(e.target.classList.contains('fa-trash')) {
      const deleteBlog = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      if(confirm('Blogu silmek istediğinize emin misiniz?')) {
        UI.deleteBlogFromUI(deleteBlog);
        Request.deleteBlogFromRequest(deleteBlog.id);
        UI.toastMessage('Blog Başarılı Bir Şekilde Silindi.');
      }
    }
    e.preventDefault();
  }

  static showAllBlogs4Button = function(e) {
    UI.clearAllFilters();
    UI.showAllBlogsFromUI();
    e.preventDefault();
  }
}
