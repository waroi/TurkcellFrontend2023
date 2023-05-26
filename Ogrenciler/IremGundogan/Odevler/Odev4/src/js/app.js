import { http } from "./httpRequests.js";
import { ui } from "./ui.js";

const API_URL = "http://localhost:3000/posts";
const API_URL_CART = "http://localhost:3000/cart";
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

getCartItems(API_URL_CART);

async function getCartItems(url) {
  const res = await fetch(url);
  const data = await res.json();
  updateCartCount(data);
  return data;
}

function updateCartCount(data) {
  document.querySelector(".cart-value").textContent = data.length;
}

function setEvents() {
  const deleteBtn = document.querySelectorAll(".delete");
  const editBtn = document.querySelectorAll("#edit-post");
  const saveBtn = document.getElementById("saveChangesButton");
  const editSaveBtn = document.getElementById("editButton");
  const addToCartBtn = document.querySelectorAll(".add-to-cart");
  const addProductBtn = document.querySelector(".add-product-btn");
  const filterCategory = document.getElementById("filterCategory");
  const sort = document.getElementById("sort");
  const blogElements = document.querySelectorAll(".blog");
  search.addEventListener("keyup", (e) => {
    filterCategory.value = "All";

    const filterValue = e.target.value.toLowerCase();

    blogElements.forEach((blog) => {
      const nameElement = blog.querySelector(".name");
      const name = nameElement.innerHTML.toLowerCase();

      if (name.includes(filterValue)) {
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
      console.log(blog);
      const category = blog.querySelector(".category").textContent;
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
    console.log(sortedValue);
    const blogElementsArray = Array.from(blogElements);

    blogElementsArray.sort((a, b) => {
      const aname = a.querySelector(".name h3").textContent;
      const bname = b.querySelector(".name h3").textContent;
      const aPrice = a.querySelector(".price").textContent.slice(1);
      const bPrice = b.querySelector(".price").textContent.slice(1);

      if (sortedValue === "name-desc") {
        return bname.localeCompare(aname);
      } else if (sortedValue === "name-asc") {
        return aname.localeCompare(bname);
      } else if (sortedValue === "price-asc") {
        return aPrice - bPrice;
      } else if (sortedValue === "price-desc") {
        return bPrice - aPrice;
      }
    });

    blogElementsArray.forEach((blog) => {
      main.appendChild(blog);
    });
  });

  deleteBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.parentElement.id === "delete-post") {
        const id = e.target.parentElement.dataset.id;

        if (confirm("Are u sure?")) {
          http
            .delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
              ui.showAlert("Post silindi", "danger");
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
      const id = e.target.parentElement.dataset.id;
      const imageUrl =
        e.target.closest(".blog").children[0].lastElementChild.src;
      const category = e.target
        .closest(".blog")
        .querySelector(".category").textContent;
      const name = e.target
        .closest(".blog")
        .querySelector(".name h3").textContent;
      const price = e.target
        .closest(".blog")
        .querySelector(".price").textContent;
      const textContent = e.target
        .closest(".blog")
        .querySelector(".textArea").textContent;
      const stock = e.target
        .closest(".blog")
        .querySelector(".stock").textContent;

      const modal = new bootstrap.Modal(document.getElementById("blogModal"));

      const data = {
        id,
        imageUrl,
        category,
        name,
        price,
        stock,
        textContent,
      };

      ui.fillForm(data);

      modal.show();
    });
  });

  editSaveBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const category = document.getElementById("category").value;
    const text = document.getElementById("text").value;
    const imageUrl = document.getElementById("image").value;
    const id = document.getElementById("id").value;

    const data = {
      name,
      price,
      stock,
      category,
      text,
      imageUrl,
      id,
    };
    // Validate
    if (
      name === "" ||
      price === "" ||
      stock === "" ||
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
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const category = document.getElementById("category").value;
    const text = document.getElementById("text").value;
    const imageUrl = document.getElementById("image").value;
    // Create an object with the data
    const data = {
      name,
      price,
      stock,
      category,
      text,
      imageUrl,
    };

    if (
      name === "" ||
      price === "" ||
      stock === "" ||
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
  addToCartBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      // Get the values from the modal
      const id = +e.target.dataset.id;
      const imageUrl =
        e.target.closest(".blog").children[0].lastElementChild.src;
      const name = e.target
        .closest(".blog")
        .querySelector(".name h3").textContent;
      const price = e.target
        .closest(".blog")
        .querySelector(".price").textContent;
      const stock = e.target
        .closest(".blog")
        .querySelector(".stock").textContent;
      const quantity = e.target
        .closest(".blog")
        .querySelector("#quantity").value;
      const text = e.target
        .closest(".blog")
        .querySelector(".textArea").textContent;
      const category = e.target
        .closest(".blog")
        .querySelector(".category").textContent;
      // Create an object with the data
      const data = {
        name,
        price,
        stock,
        imageUrl,
        id,
        quantity,
        text,
        category,
      };

      if (
        name === "" ||
        price === "" ||
        stock === "" ||
        imageUrl === "" ||
        quantity === ""
      ) {
        ui.showAlert("Please fill in all fields", "danger");
      } else {
        // Make a POST request to the API endpoint
        http
          .post(`http://localhost:3000/cart`, data)
          .then(() => {
            ui.showAlert("Product added to cart", "success");
          })
          .catch((err) => console.log(err));

        $(`#exampleModal${id}`).modal("hide");
      }
    });
  });

  addProductBtn.addEventListener("click", () => {
    ui.clearFields();
  });
}
