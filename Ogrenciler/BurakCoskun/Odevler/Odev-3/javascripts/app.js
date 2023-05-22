const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const imageInput = document.getElementById("image");
const createBtn = document.getElementById("createBtn");
const blogList = document.getElementById("blog-list");
const updateBtn = document.getElementById("updateBtn");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const cancelBtn = document.getElementById("cancelBtn");
const deleteBtn = document.getElementById("delete-post");
const editBtn = document.getElementById("edit-post");
const addBtns = document.querySelectorAll(".addBtn");

const request = new Request("http://localhost:3000/blogs");
const ui = new UI();
const post = new Post();

eventListeners();

function eventListeners() {
  addBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      ui.clearInputs();
    });
  });
  createBtn.addEventListener("click", (e) => post.addPost(e));
  document.addEventListener("DOMContentLoaded", () => {
    ui.addPostToUI();
  });
  updateBtn.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-id");
    let date = new Date();
    const newPost = {
      title: titleInput.value,
      content: contentInput.value,
      author: authorInput.value,
      date: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} - ${date.getHours()}:${
        date.getMinutes().toString().length == 1
          ? "0" + date.getMinutes()
          : date.getMinutes()
      }:${
        date.getSeconds().toString().length == 1
          ? "0" + date.getSeconds()
          : date.getSeconds()
      }`,
      category: categoryInput.value,
      image: imageInput.value,
    };

    request.put(id, newPost).then((data) => console.log(data));
  });
  categoryList.addEventListener("click", (e) => {
    if (e.target.classList.contains("list-group-item")) {
      const activeItem = categoryList.querySelector(".list-group-item.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      e.target.classList.add("active");

      ui.filterAndSearchPosts();
    }
  });
  searchInput.addEventListener("keyup", ui.filterAndSearchPosts);
  sortSelect.addEventListener("change", ui.sortPosts);
  cancelBtn.addEventListener("click", () => {
    ui.clearInputs();
    updateBtn.classList.add("d-none");
    updateBtn.classList.remove("d-inline-block");
    createBtn.classList.remove("d-none");
    createBtn.classList.add("d-inline-block");
    updateBtn.setAttribute("data-id", "");
  });
}

function parseDate(dateString) {
  const dateArray = dateString.split(" ")[0].split("/");
  const timeArray = dateString.split(" ")[2].split(":");
  const date = new Date(
    dateArray[2],
    dateArray[1] - 1,
    dateArray[0],
    timeArray[0],
    timeArray[1],
    timeArray[2]
  );
  return date;
}
