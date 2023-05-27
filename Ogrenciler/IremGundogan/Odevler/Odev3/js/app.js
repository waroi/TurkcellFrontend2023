import { http } from "./httpRequests.js";
import { ui } from "./ui.js";

const API_URL = "http://localhost:3000/posts";
const main = document.getElementById("main");
const search = document.getElementById("search");

// Get initial blogs
getBlogs(API_URL);

async function getBlogs(url) {
  const res = await fetch(url);
  const data = await res.json();
  ui.showBlogs(data);
  setEvents();
  return data;
}

function setEvents() {
  const deleteBtn = document.querySelectorAll(".delete");
  const editBtn = document.querySelectorAll("#edit-post");
  const saveBtn = document.querySelector("#saveChangesButton");
  const editSaveBtn = document.querySelector("#editButton");
  const filterCategory = document.querySelector("#filterCategory");
  const sort = document.querySelector("#sort");
  const blogElements = document.querySelectorAll(".blog");

  search.addEventListener("keyup", (e) => {
    filterCategory.value = "All";

    const filterValue = e.target.value.toLowerCase();

    blogElements.forEach((blog) => {
      const titleElement = blog.querySelector(".title");
      const authorElement = blog.querySelector(".author");
      const title = titleElement.innerHTML.toLowerCase();
      const author = authorElement.innerHTML.toLowerCase();

      if (title.includes(filterValue) || author.includes(filterValue)) {
        blog.classList.remove("d-none");
      } else {
        blog.classList.add("d-none");
      }
    });
  });

  filterCategory.addEventListener("change", (e) => {
    search.value = "";

    const filteredCategory = e.target.value;
    blogElements.forEach((blog) => {
      const category = blog.querySelector(".category").children[0].textContent;
      if (category === filteredCategory) {
        blog.classList.remove("d-none");
      } else if (filteredCategory === "All" || !filteredCategory) {
        blog.classList.remove("d-none");
      } else {
        blog.classList.add("d-none");
      }
    });
  });

  sort.addEventListener("change", (e) => {

    const sortedValue = e.target.value;
    const blogElementsArray = Array.from(blogElements);

    blogElementsArray.sort((a, b) => {
      const aTitle = a.querySelector(".blog-info").children[0].textContent;
      const bTitle = b.querySelector(".blog-info").children[0].textContent;
      const aDate = new Date(a.querySelector(".date").children[0].textContent);
      const bDate = new Date(b.querySelector(".date").children[0].textContent);

      if (sortedValue === "title-desc") {
        return bTitle.localeCompare(aTitle);
      } else if (sortedValue === "title-asc") {
        return aTitle.localeCompare(bTitle);
      } else if (sortedValue === "date-desc") {
        return aDate - bDate;
      } else if (sortedValue === "date-asc") {
        return bDate - aDate;
      }
    });

    blogElementsArray.forEach((blog) => {
      main.appendChild(blog);
    });
  });

  deleteBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.id === "delete-post") {
        const id = e.target.dataset.id;

        if (confirm("Are u sure?")) {
          http
            .delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
              //   ui.showAlert("Post silindi", "danger");
              getBlogs();
            })
            .catch((err) => console.log(err));
        }
        e.preventDefault();
      }
    });
  });

  editBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      editSaveBtn.classList.remove("d-none");
      saveBtn.classList.add("d-none");
      const id = e.target.dataset.id;
      const imageUrl = e.target.closest(".blog").firstElementChild.src;
      const category =
        e.target.closest(".row").children[1].children[0].textContent;
      const title =
        e.target.closest(".blog").children[1].children[0].textContent;
      const author = e.target.closest(".overview").children[2].textContent;
      const textContent = e.target.closest(".overview").children[1].textContent;

      const modal = new bootstrap.Modal(document.getElementById("blogModal"));

      const date = new Date();
      const day = `${date.getDate()}`.padStart(2, 0);
      const month = `${date.getMonth() + 1}`.padStart(2, 0);
      const year = date.getFullYear();

      const data = {
        id,
        imageUrl,
        category,
        title,
        author,
        textContent,
        date: `${year}-${month}-${day}`,
      };

      ui.fillForm(data);

      modal.show();
    });
  });

  editSaveBtn.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const date = document.querySelector("#year").value;
    const category = document.querySelector("#category").value;
    const text = document.querySelector("#text").value;
    const imageUrl = document.querySelector("#image").value;
    const id = document.getElementById("id").value;

    const data = {
      title,
      author,
      date,
      category,
      text,
      imageUrl,
      id,
    };
    // Validate
    if (
      title === "" ||
      author === "" ||
      date === "" ||
      category === "" ||
      imageUrl === "" ||
      text === ""
    ) {
      ui.showAlert("Please fill in all fields", "danger");
    } else {
      // ui.updateBlogFields(id);

      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then(() => {
          ui.showAlert("Blog updated", "success");
          ui.clearFields();
          getBlogs(API_URL);
        })
        .catch((err) => console.log(err));

      $("#blogModal").modal("hide");
      editSaveBtn.classList.add("d-none");
      saveBtn.classList.remove("d-none");
    }
  });

  saveBtn.addEventListener("click", () => {
    // Get the values from the modal
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const date = document.querySelector("#year").value;
    const category = document.querySelector("#category").value;
    const text = document.querySelector("#text").value;
    const imageUrl = document.querySelector("#image").value;
    // Create an object with the data
    const data = {
      title,
      author,
      date,
      category,
      text,
      imageUrl,
    };

    if (
      title === "" ||
      author === "" ||
      date === "" ||
      category === "" ||
      imageUrl === "" ||
      text === ""
    ) {
      ui.showAlert("Please fill in all fields", "danger");
    } else {
      // Make a POST request to the API endpoint
      http
        .post(`http://localhost:3000/posts`, data)
        .then(() => {
          ui.showAlert("Blog added", "success");
          ui.clearFields();
          getBlogs(API_URL);
        })
        .catch((err) => console.log(err));

      $("#blogModal").modal("hide");
    }
  });
}
