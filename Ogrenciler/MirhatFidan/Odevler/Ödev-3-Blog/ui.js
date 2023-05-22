
import Request from "./request.js";
const blogAuthorInp = document.querySelector("#blog-author");
const blogTitleInp = document.querySelector("#blog-title");
const blogTextInp = document.querySelector("#blog-text");
const blogImgInp = document.querySelector("#blog-image");
const blogCatInp = document.querySelector("#blog-category");

const blogRow = document.querySelector("#blog-row");
const categorySelect = document.querySelector("#category-select");

const url = "http://localhost:3000/blogs";

function blogCard(blog) {
  return `
  <div class="col-lg-6 my-3" id="${blog.id}">
    <div class="card h-100">
      <div class="row g-0">
            <div class="col-lg-4">
            <img src="${blog.image
    }" class="img-fluid rounded-start w-100 h-100" alt="...">
      </div>
            <div class="col-lg-8">
            <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <h6 class="card-subtitle mb-2 blog-author"><i class="fa-regular fa-user"></i> ${blog.author
    }</h6>
  <h6 class="card-subtitle mb-2 blog-date"> <i class="fa-regular fa-calendar"></i> ${blog.releaseDate
    }</h6>
  <h6 class="card-subtitle mb-2 blog-time"><i class="fa-regular fa-clock"></i> ${blog.releaseTime
    }</h6>
  <h6 class="card-subtitle mb-2 blog-about"> ${blog.category}</h6>
        <p class="card-text">${blog.text.length > 25 ? blog.text.slice(0, 25) + "..." : blog.text
    }</p>
        <button
          type="button"
          class="btn btn-primary see-blog"
          data-bs-toggle="modal"
          data-bs-target="#blog-modal"
        >
        <i class="fa-brands fa-readme"></i>
        </button>
        <a href="#add-edit" class="btn btn-warning edit-blog"><i class="fa-solid fa-pen-to-square"></i></a>
        <button type="button" class="btn btn-danger delete-blog"><i class="fa-solid fa-trash"></i></button>
      </div>
      </div>
      </div>
      </div>
    </div>
    `;
}

function createOption(value) {
  return `<option value="${value}">${value}</option>`;
}

class UI {
  static addBlogsToUI(blogs) {
    blogRow.innerHTML = "";
    blogRow.innerHTML += blogs.map((blog) => blogCard(blog)).join("");
  }

  static updateDisplay() {
    Request.get(url)
      .then((data) => this.addBlogsToUI(data))
      .catch((err) => console.log(err));
  }

  static uniqueCategories(blogs) {
    const categoriesSet = new Set(
      blogs.map((blog) => blog.category.toUpperCase())
    );
    categorySelect.innerHTML = "";
    categorySelect.innerHTML += `<option value="">Tümü</option>`;
    categorySelect.innerHTML += Array.from(categoriesSet)
      .map((category) => {
        return createOption(category);
      })
      .join("");
  }

  static makeUniques() {
    Request.get(url)
      .then((data) => this.uniqueCategories(data))
      .catch((err) => console.log(err));
  }

  static isEmpty() {
    return (
      blogAuthorInp.value == "" ||
      blogTitleInp.value == "" ||
      blogTextInp.value == "" ||
      blogImgInp.value == "" ||
      blogCatInp.value == ""
    );
  }
}

export default UI;
