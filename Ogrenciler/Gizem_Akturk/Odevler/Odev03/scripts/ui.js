import {
  elements
} from "./selectors.js";
import { Blog } from "./blog.js";

class UI {
  static loadAllBlogsToUI(blogs) {
    blogs.map((blog) => {
      this.addBlogToUI(blog);
    });
  }
  static addBlogToUI(blog) {
    const blogItem = document.createElement("li");
    blogItem.id = blog.id;
    blogItem.className = "col-lg-4 col-md-6 col-sm-12 mb-4";
    blogItem.innerHTML = UI.buildBlogCard(blog);
    blogItem.addEventListener("mouseover", this.addHoverEffect);
    blogItem.addEventListener("mouseout", this.removeHoverEffect);
    blogItem.addEventListener("click", this.deleteBlogEvent);
    blogItem.addEventListener("click", this.updateBlogEvent);
    blogItem.addEventListener("click", this.contentBlogEvent);
    elements.blogList.appendChild(blogItem);
  }

  static addHoverEffect() {
    this.classList.add("hover");
    this.querySelector(".edit").classList.remove("hidden");
  }

  static removeHoverEffect() {
    this.classList.remove("hover");
    this.querySelector(".edit").classList.add("hidden");
  }
  static buildBlogCard(blog) {
    return `
    <div class="card" style=" position: relative;">
    <div class="edit hidden me-2 mt-1" style="position: absolute; top: 0; right: 0;">
    <a id="update-blog" class="btn btn-success rounded-circle mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-pencil"></i></a>
    <a href="#" id="delete-blog" class="btn btn-danger rounded-circle mt-1"><i class="fa fa-trash"></i></a>
    
  </div>
    <img src="${blog.blogImgUrl}"  class="img-fluid rounded" style="max-height:153px !important" alt="...">
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
          <a href="#" class="btn-primary" data-blog-id="${blog.id}" id="read" data-bs-toggle="modal"
          data-bs-target="#contentModal" style="text-decoration:none">Read</a>
        </div>
      </div>
    </div>
  </div>
        `;
  }

  static loadWelcomeBlogToUI(blog) {
    elements.welcomeBlog.innerHTML = this.buildWelcomeBlogCard(blog);
    elements.welcomeBlog.addEventListener("click", this.contentBlogEvent);
  }

  static loadTopRatedBlogsToUI(blogs) {
    blogs.map((blog) => {
      elements.topRatedBlogs.innerHTML += this.buildTopRatedBlogCard(blog);
    });
    elements.topRatedBlogs.addEventListener("click", this.contentBlogEvent);
  }


  static buildWelcomeBlogCard(blog) {
    return `
    <div class="card" style=" position: relative;">
          <div class="edit hidden me-2 mt-1" style="position: absolute; top: 0; right: 0;">
            <a id="update-blog" class="btn btn-success rounded-circle" data-bs-toggle="modal"
              data-bs-target="#exampleModal"><i class="fa fa-pencil"></i></a>
            <a href="#" id="delete-blog" class="btn btn-danger rounded-circle"><i class="fa fa-trash"></i></a>

          </div>
          <img src="${blog.blogImgUrl}"
            class="img-fluid rounded" style="max-height:153px !important;min-height: 375px !important" alt="...">
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
              <a href="#" class="btn-primary" data-blog-id="${blog.id}" id="read" data-bs-toggle="modal"
              data-bs-target="#contentModal" style="text-decoration:none">Read</a>
              </div>
            </div>
          </div>
        </div>
        `;
  }

  static buildTopRatedBlogCard(blog) {
    return `
    <li class="mb-2 mt-2">
    <div class="card">
      <div class="card-body">
        <div class="row mb-2 rounded">
          <div class="col-6">
            <p class="card-text text-muted" style="font-size: 0.75rem; color: blueviolet !important">${blog.category}</p>
          </div>
          <div class="col-6">
            <p class="card-text text-muted text-end" style="font-size: 0.75rem">${blog.author}</p>
          </div>
        </div>
        <div class="row  mt-2">
          <div class="col-6">
            <h5 class="card-title">${blog.title}</h5>
          </div>

          <div class="col-6 text-end">
          <a href="#" class="btn-primary" data-blog-id="${blog.id}" id="read" data-bs-toggle="modal"
          data-bs-target="#contentModal" style="text-decoration:none">Read</a>
          </div>
        </div>
      </div>
    </div>
  </li>
        `;
  }

  static buildContentBlogCard(blog) {
    return `
    <div class="card" style=" position: relative;">
    <div class="edit hidden me-2 mt-1" style="position: absolute; top: 0; right: 0;">
      <a id="update-blog" class="btn btn-success rounded-circle" data-bs-toggle="modal"
        data-bs-target="#exampleModal"><i class="fa fa-pencil"></i></a>
      <a href="#" id="delete-blog" class="btn btn-danger rounded-circle"><i class="fa fa-trash"></i></a>

    </div>
    <img src="${blog.blogImgUrl}"
      class="img-fluid rounded" style="max-height:153px !important;min-height: 375px !important" alt="...">
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
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-12">
          <p class="card-text text-muted" style="font-size: 0.75rem">${blog.content}</p>
          </div>
          </div>
    </div>
  </div>
        `;
  }

  static contentBlogEvent(e) {
    if (e.target.id === "read") {
      const blogId = e.target.getAttribute("data-blog-id");
      console.log();
      const blog = new Blog(blogId);
      blog.getBlog();
    }
  }

  static getBlogToUI(blog) {
    elements.contentBlogModal.innerHTML = this.buildContentBlogCard(blog);
  }

  static deleteBlogEvent(e) {
    if (e.target.id === "delete-blog") {
      if (confirm("Are you sure?")) {
        const blogId = e.target.parentElement.parentElement.parentElement.id;
        const blog = new Blog(blogId);
        blog.deleteBlog(e.target.parentElement.parentElement);
        e.preventDefault();
      }
    }
  }

  static deleteBlogFromUI(element) {
    element.parentElement.remove();
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
    existingBlog.innerHTML = UI.buildBlogCard(blog);

  }
  static showAlert(message, className) {
    // show toast alert
    const alert = document.createElement("div");
    alert.className = `alert alert-${className}`;
    alert.textContent = message;
    alert.style.position = "fixed";
    alert.style.top = "75px";
    alert.style.right = "15px";
    alert.style.zIndex = "99";
    document.body.appendChild(alert);

    // remove alert after 2 seconds
    setTimeout(function () {
      alert.remove();
    }
      , 2000);

  }
  static clearInputs() {
    elements.blogAuthor.value = "";
    elements.blogCategory.value = "";
    elements.blogContent.value = "";
    elements.blogDate.value = "";
    elements.blogImgUrl.value = "";
    elements.blogTitle.value = "";
  }
  static clearAllBlogsFromUI() {
    while (elements.blogList.firstElementChild !== null) {
      elements.blogList.firstElementChild.remove();
    }
  }

  static fillInputs(blog) {
    elements.updateBlogForm.setAttribute("data-blog-id", blog.id);
    elements.newBlogTitle.value = blog.title;
    elements.newBlogContent.value = blog.content;
    elements.newBlogAuthor.value = blog.author;
    elements.newBlogDate.value = blog.date;
    elements.newBlogImgUrl.value = blog.blogImgUrl;
    elements.newBlogCategory.value = blog.category;
  }
}

export { UI };
