import UI from "./ui.js";
import Process from "./operation.js";
import Blog from "./blog.js";

const blogRow = document.querySelector("#blog-row");
const blogBody = document.querySelector("#blog-body");
const blogHeading = document.querySelector("#blog-heading");
const blogAuthorInp = document.querySelector("#blog-author");
const blogTitleInp = document.querySelector("#blog-title");
const blogTextInp = document.querySelector("#blog-text");
const blogImgInp = document.querySelector("#blog-image");
const blogCatInp = document.querySelector("#blog-category");
const addBtn = document.querySelector("#add-btn");
const blogForm = document.querySelector("#blog-form");
const categorySelect = document.querySelector("#category-select");
const sortSelect = document.querySelector("#sort-select");
const searchArea = document.querySelector("#search-area");

resetValues();
UI.updateDisplay();
UI.makeUniques();
handleEventListeners();

function handleEventListeners() {
  blogRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("see-blog")) {
      const blogCard = e.target.closest(".col-lg-6");
      Process.seeFullBlog(blogCard.id, blogBody, blogHeading);
    } else if (e.target.classList.contains("edit-blog")) {
      const blogCard = e.target.closest(".col-lg-6");
      Process.editBlog(
        blogCard.id,
        blogAuthorInp,
        blogTitleInp,
        blogTextInp,
        blogImgInp,
        blogCatInp,
        blogForm
      );
    } else if (e.target.classList.contains("delete-blog")) {
      const blogCard = e.target.closest(".col-lg-6");
      Process.delete(blogCard.id);
      UI.updateDisplay();
    }
  });

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!UI.isEmpty()) {
      const postData = new Blog(
        blogAuthorInp.value,
        blogTitleInp.value,
        blogTextInp.value,
        blogCatInp.value,
        blogImgInp.value
      );
      Process.addBlog(postData, blogForm);
      UI.updateDisplay();
    } else alert("Please fill out the entire form.");
  });

  categorySelect.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value == "") {
      UI.updateDisplay();
    } else Process.filterByCategory(e.target.value);
    if (sortSelect.value != "") {
      Process.sort(sortSelect.value);
    }
  });

  searchArea.addEventListener("keyup", (e) => {
    Process.search(e.target.value);
  });

  sortSelect.addEventListener("change", (e) => {
    Process.sort(e.target.value);
  });
}

function resetValues() {
  sortSelect.value = "";
  searchArea.value = "";
  blogAuthorInp.value = "";
  blogTitleInp.value = "";
  blogTextInp.value = "";
  blogImgInp.value = "";
  blogCatInp.value = "";
}
