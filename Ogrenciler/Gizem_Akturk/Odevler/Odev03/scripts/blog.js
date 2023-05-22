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
        UI.deleteBlogFromUI(e);
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
    request
      .get(this.id)
      .then((blog) => {
        UI.fillInputs(blog);
        UI.getBlogToUI(blog);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async getWelcomeBlog() {
    request
      .getAll()
      .then((blogs) => {
        const welcomeBlog = blogs[0];
        UI.loadWelcomeBlogToUI(welcomeBlog);
      }
      )
      .catch((err) => UI.showAlert(err, "danger"));

  }

  async getTopRatedBlogs() {
    request
      .getAll()
      .then((blogs) => {
        const topRatedBlogs = blogs.slice(1, 5);
        UI.loadTopRatedBlogsToUI(topRatedBlogs);
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

  async getAllCategories() {
    const categories = [];
    try {
      const blogs = await request.getAll();
      blogs.map((blog) => {
        if (!categories.includes(blog.category.toLowerCase())) {
          categories.push(blog.category.toLowerCase());
        }
      });
    } catch (err) {
      UI.showAlert(err, "danger");
    }
    return categories;
  }

  async getAllAuthors() {
    const authors = [];
    try {
      const blogs = await request.getAll();
      blogs.map((blog) => {
        if (!authors.includes(blog.author.toLowerCase())) {
          authors.push(blog.author.toLowerCase());
        }
      });
    } catch (err) {
      UI.showAlert(err, "danger");
    }
    return authors;
  }

  filterBlogs(category, author, searchInput, sortBy) {
    request
      .getAll()
      .then((blogs) => {
        const filteredBlogs = [...blogs]
          .filter((blog) => category === "all" || blog.category.toLowerCase() === category)
          .filter((blog) => author === "all" || blog.author.toLowerCase() === author)
          .filter((blog) => searchInput === "" || blog.title.match(new RegExp(searchInput, "gi")) || blog.content.match(new RegExp(searchInput, "gi")));

        const sortOptions = {
          "newest": (a, b) => new Date(a.date) - new Date(b.date),
          "oldest": (a, b) => new Date(b.date) - new Date(a.date),
          "a-z": (a, b) => a.title.localeCompare(b.title),
          "z-a": (a, b) => b.title.localeCompare(a.title),
        };
        if (sortOptions.hasOwnProperty(sortBy)) {
          filteredBlogs.sort(sortOptions[sortBy]);
        }
        filteredBlogs.length === 0
          ? UI.showAlert("Herhangi bir blog bulunamadı", "warning")
          : UI.loadAllBlogsToUI(filteredBlogs);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }
}

export { Blog };
