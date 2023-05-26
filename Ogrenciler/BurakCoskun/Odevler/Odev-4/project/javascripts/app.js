const productList = document.querySelector("#product-list");
const updateBtn = document.querySelector("#updateBtn");
const createBtn = document.querySelector("#createBtn");
const nameInput = document.querySelector("#product-name");
const priceInput = document.querySelector("#price");
const categoryInput = document.querySelector("#category");
const imageInput = document.querySelector("#image");
const stockInput = document.querySelector("#stock");
const addBtn = document.querySelector(".addBtn");
const categoryList = document.querySelector("#category-select");
const sortSelect = document.querySelector("#sort-select");
const searchInput = document.querySelectorAll(".search-input");
const shoppingCart = document.querySelector(".minicart");
const cartList = document.querySelector(".cartProductList");
const totalPrice = document.querySelector(".totalPrice");
const buyBtn = document.querySelector(".buyBtn");
const inputs = document.querySelectorAll(".form-control");

const ui = new UI();
const request = new Request("http://localhost:4000/products");
const cartRequest = new Request("http://localhost:4000/cart");
const cart = new Cart();
const product = new Product();

eventListeners();

function eventListeners() {
  window.addEventListener("DOMContentLoaded", () => {
    ui.addProductsFromDB();
    ui.cartUI();
  });
  addBtn.addEventListener("click", (e) => ui.clearInputs());

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    product.addProduct(e);
  });
  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    product.updateProduct();
  });

  searchInput.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      ui.filterAndSearch();
    });
  });

  categoryList.addEventListener("change", (e) => {
    ui.filterAndSearch();
  });

  sortSelect.addEventListener("change", (e) => {
    ui.sortProducts();
  });

  buyBtn.addEventListener("click", (e) => {
    cartRequest.get().then((data) => {
      if (data.length > 0) {
        return cart.buyCart();
      }
      ui.toastUI("Your cart is empty", "danger");
    });
  });

  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      validateForm();
    });
  });
}

function validation() {
  const name = nameInput.value.toUpperCase().trim();
  const price = priceInput.value;
  const category = categoryInput.value.toUpperCase().trim();
  const image = imageInput.value;
  const stock = stockInput.value;

  if (
    name === "" ||
    price === "" ||
    category === "" ||
    image === "" ||
    stock === ""
  ) {
    return { error: true, message: "Please fill all the fields" };
  }
  if (stock < 0 || stock % 1 !== 0) {
    return {
      error: true,
      message: "Stock can't be negative or a floating number",
    };
  }
  if (!isNaN(category) || !isNaN(name)) {
    return { error: true, message: "Category and Name can't be numbers" };
  }
  if (!image.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
    return { error: true, message: "Image must be a valid URL" };
  }

  return { error: false };
}

function validateForm() {
  let isFormValid = true;

  inputs.forEach((input) => {
    if (validation().error) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    createBtn.setAttribute("data-bs-dismiss", "modal");
    updateBtn.setAttribute("data-bs-dismiss", "modal");
  } else {
    createBtn.removeAttribute("data-bs-dismiss");
    updateBtn.removeAttribute("data-bs-dismiss");
  }
}
