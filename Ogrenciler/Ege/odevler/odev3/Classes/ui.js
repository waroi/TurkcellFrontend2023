import blogCard from "../Components/blogCard.js";
import createOption from "../Components/option.js";
import Request from "./request.js";
const blogAuthorInp = document.querySelector("#blog-author");
const blogTitleInp = document.querySelector("#blog-title");
const blogTextInp = document.querySelector("#blog-text");
const blogImgInp = document.querySelector("#blog-image");
const blogCatInp = document.querySelector("#blog-category");

const blogRow = document.querySelector("#blog-row");
const categorySelect = document.querySelector("#category-select");

const url = "http://localhost:3000/blogs";

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
    categorySelect.innerHTML += `<option value="">All</option>`;
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
