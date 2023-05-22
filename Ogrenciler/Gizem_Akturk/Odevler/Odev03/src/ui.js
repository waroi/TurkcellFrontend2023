import {
  blogList,
  blogTitle,
  blogContent,
  blogAuthor,
  blogDate,
  blogImgUrl,
  blogCategory,
  newBlogTitle,
  newBlogContent,
  newBlogAuthor,
  newBlogDate,
  newBlogImgUrl,
  newBlogCategory,
  updateBlogForm,
} from "./selectors.js";
import { Blog } from "./blog.js";

class UI {
  static loadAllBlogsToUI(blogs) {
    blogs.map((blog) => {
      this.addBlogToUI(blog);
    });
  }
  static addBlogToUI(blog) {
    //TODO: harf sınırı koy
    const blogItem = document.createElement("li");
    blogItem.id = blog.id;
    blogItem.className = "col-lg-4 mb-3";
    blogItem.innerHTML = `
    <div class="card" style="width: 400px; height:335px; position: relative;">
    <div class="edit hidden me-2 mt-1" style="position: absolute; top: 0; right: 0;">
    <a id="update-blog" class="btn btn-success rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-pencil"></i></a>
    <a href="#" id="delete-blog" class="btn btn-danger rounded-circle"><i class="fa fa-trash"></i></a>
    
  </div>
    <img src="${blog.blogImgUrl}" class="img-fluid rounded" alt="...">
    <div class="card-body">
      <div class="row mb-2 rounded">
        <div class="col-6">
          <p class="card-text text-muted" style="font-size: 0.75rem">${blog.category}</p>
        </div>
        <div class="col-6">
          <p class="card-text text-muted text-end" style="font-size: 0.75rem">${blog.author}</p>
        </div>
      </div>
      <h5 class="card-title">${blog.title}</h5>
      <div class="row mb-2 mt-2">
        <div class="col-6 d-flex align-items-center">
          <p class="card-text text-muted" style="font-size: 0.75rem">3 min read</p>
        </div>
        <div class="col-6 text-end">
          <a href="#" class="btn-primary" style="text-decoration:none">Read</a>
        </div>
      </div>
    </div>
  </div>
        `;

    // add hover effect
    blogItem.addEventListener("mouseover", function () {
      blogItem.classList.add("hover");
      blogItem.querySelector(".edit").classList.remove("hidden");
    });

    blogItem.addEventListener("mouseout", function () {
      blogItem.classList.remove("hover");
      blogItem.querySelector(".edit").classList.add("hidden");
    });

    // add event listener for delete
    blogItem.addEventListener("click", this.deleteBlogEvent);
    blogItem.addEventListener("click", this.updateBlogEvent);

    blogList.appendChild(blogItem);
  }
  static deleteBlogEvent(e) {
    if (e.target.id === "delete-blog") {
      const blogId = e.target.parentElement.parentElement.parentElement.id;
      const blog = new Blog(blogId);
      blog.deleteBlog(e.target.parentElement.parentElement);
      e.preventDefault();
    }
  }

  static updateBlogEvent(e) {
    if (e.target.id === "update-blog") {
      const blogId = e.target.parentElement.parentElement.parentElement.id;
      const blog = new Blog(blogId);
      blog.getBlog();
    }
  }
  static updateBlogToUI(blog) {
    const existingBlog = document.getElementById(blog.id);
    existingBlog.innerHTML = `
        <td>${blog.id}</td>
        <td>${blog.title}</td>
        <td>${blog.author}</td>
        <td>${blog.category}</td>
        <td>${blog.date}</td>
        <td>${blog.content}</td>
        <td>${blog.blogImgUrl}</td>
        <td><a href="#" id = "delete-blog" class = "btn btn-danger">Delete</a>
        <a  id = "update-blog" class = "btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</a></td>
        `;
  }
  static showAlert(message, className) {
    const alert = `
        <div class = "alert alert-${className}">
            ${message}
        </div>
        `;
    const row = document.querySelector(".container");
    row.insertAdjacentHTML("beforebegin", alert);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  static clearInputs() {
    blogAuthor.value = "";
    blogCategory.value = "";
    blogContent.value = "";
    blogDate.value = "";
    blogImgUrl.value = "";
    blogTitle.value = "";
  }
  static clearAllBlogsFromUI() {
    while (blogList.firstElementChild !== null) {
      blogList.firstElementChild.remove();
    }
  }

  static fillInputs(blog) {
    console.log(blog);
    updateBlogForm.setAttribute("data-blog-id", blog.id);
    newBlogTitle.value = blog.title;
    newBlogContent.value = blog.content;
    newBlogAuthor.value = blog.author;
    newBlogDate.value = blog.date;
    newBlogImgUrl.value = blog.blogImgUrl;
    newBlogCategory.value = blog.category;
  }
}

export { UI };
