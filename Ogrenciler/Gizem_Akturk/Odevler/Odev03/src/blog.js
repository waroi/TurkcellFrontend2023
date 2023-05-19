import { UI } from "./ui.js";
import { request } from "./requests.js";

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
    await request.post(
        this,
        (err, blog) => {
            if (err) {
                UI.showAlert(err, "danger");
            } else {
                UI.showAlert("Blog başarıyla eklendi", "success");
                UI.addBlogToUI(blog);
            }
            }
    );
    UI.clearInputs();
  }

  async deleteBlog() {
      await request.delete(
        this.id,
        (err, message) => {
          if (err) {
            UI.showAlert(err, "danger");
          } else {
            UI.showAlert(message, "success");
            UI.deleteBlogFromUI(e.target);
          }
        }
      );
  }

    async updateBlog() {   
            await request.put(
                this,
                (err, blog) => {
                    if (err) {
                        UI.showAlert(err, "danger");
                    } else {
                        UI.showAlert("Blog başarıyla güncellendi", "success");
                        UI.updateBlogToUI(blog);
                    }
                }
            );
        
    }

    async getBlog(e) {  
        if (e.target.id === "update-blog") {
            await request.get(
                this.id,
                (err, blog) => {
                    if (err) {
                        UI.showAlert(err, "danger");
                    } else {
                        UI.showAlert("Blog başarıyla güncellendi", "success");
                        UI.updateBlogToUI(blog);
                    }
                }
            );
        }
    }

    async getAllBlogs() {
        await request.get(
            (err, blogs) => {
                if (err) {
                    UI.showAlert(err, "danger");
                } else {
                    UI.showAlert("Bloglar başarıyla listelendi", "success");
                    UI.loadAllBlogsToUI(blogs);
                }
            }
        );
    }


}
