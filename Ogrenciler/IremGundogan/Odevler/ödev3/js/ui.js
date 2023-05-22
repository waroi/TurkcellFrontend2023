class UI {
  constructor() {
    this.post = document.querySelector("#main");
    this.imageUrlInput = document.querySelector("#image");
    this.categoryInput = document.querySelector("#category");
    this.titleInput = document.querySelector("#title");
    this.authorInput = document.querySelector("#author");
    this.textContentArea = document.querySelector("#text");
    this.date = document.querySelector("#year");
    this.idInput = document.getElementById("id");
    this.addPostSubmit = document.querySelector(".addSubmit");
  }

  showBlogs(blogs) {
    main.innerHTML = "";
    blogs.forEach((blog) => {
      const { category, title, author, date, imageUrl, text, id } = blog;

      const blogEl = document.createElement("div");
      blogEl.classList.add("blog");

      blogEl.innerHTML = `
      <img src="${imageUrl}" alt="${title} class="image">
      <div class="blog-info">
        <h3>${title}</h3>
      </div>
      <div class="overview">
        <h3 class="title">${title}</h3>
        <p>${text}</p>
        <p class="author">${author}</p>
        <div class="row">
          <div class="col-6 date">
            <p>${date}</p>
          </div>
          <div class="col-6 category">
            <p>${category}</p>
          </div>
          <div class="d-flex space-between justify-content-between mt-2">
            <button
              type="button"
              class="btn btn-sm btn-outline-primary fs-6 py-1 px-4 edit"
              data-id="${id}"
              id="edit-post"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-danger fs-6 py-1 px-4 delete"
              id="delete-post"
              data-id="${id}"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
        `;
      main.appendChild(blogEl);
    });
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className} position-absolute`;
    div.appendChild(document.createTextNode(message));

    document.querySelector("body").appendChild(div);

    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  updateBlogFields(blog) {
    blog.title = document.querySelector("#title").value;
    blog.author = document.querySelector("#author").value;
    blog.date = document.querySelector("#year").value;
    blog.category = document.querySelector("#category").value;
    blog.image = document.querySelector("#image").value;
    document.querySelector("#blog-form").dataset.id = blog.id;
    blog.text = document.querySelector("#text").value;
  }

  fillForm(blog) {
    this.date.value = blog.date;
    this.imageUrlInput.value = blog.imageUrl;
    this.categoryInput.value = blog.category;
    this.titleInput.value = blog.title;
    this.authorInput.value = blog.author;
    this.textContentArea.value = blog.textContent;
    this.idInput.value = blog.id;
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#text").value = "";
    document.querySelector("#image").value = "";
  }
}

export const ui = new UI();
