import { UI } from "./ui.js";
import Request from "./requests.js";

const request = new Request();

class Blog {
  constructor(id, title, author, category, date, blogImgUrl, content) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.date = date;
    this.blogImgUrl = blogImgUrl;
    this.content = content;
  }
  async addBlog() {
    request
      .post(this)
      .then((blog) => {
        UI.showAlert("Blog başarıyla eklendi", "success");
        UI.addBlogToUI(blog);
        UI.clearInputs();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async deleteBlog(e) {
    request
      .delete(this.id)
      .then((message) => {
          //UI.deleteBlogFromUI(e);
          location.reload();
          UI.showAlert("Blog başarıyla silindi", "success");
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async updateBlog() {
    request
      .put(this)
      .then((blog) => {
        UI.showAlert("Blog başarıyla güncellendi", "success");
        UI.updateBlogToUI(blog);
        UI.clearInputs();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async getBlog() {
    console.log(this.id);
    request
      .get(this.id)
      .then((blog) => {
        console.log(blog);
        UI.fillInputs(blog);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  getAllBlogs() {
    request
      .getAll()
      .then((blogs) => {
        blogs.length === 0
          ? UI.showAlert("Herhangi bir blog bulunamadı", "warning")
          : UI.loadAllBlogsToUI(blogs);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
}

export { Blog };
