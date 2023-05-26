import UI from "./Classes/ui.js";
import Process from "./Classes/process.js";
import Product from "./Classes/product.js";
const productNameInp = document.getElementById("product-name");
const productPriceInp = document.getElementById("product-price");
const productDescInp = document.getElementById("product-desc");
const productCatInp = document.getElementById("product-category");
const productCountInp = document.getElementById("product-count");
const productImgInp = document.getElementById("product-img");
const productRow = document.getElementById("product-row");
const form = document.querySelector("form");
const addBtn = document.getElementById("add-submit");
const cartBody = document.getElementById("cart-body");
const purchaseBtn = document.getElementById("purchase-btn");
const categorySelect = document.getElementById("categories");
const sortSelect = document.getElementById("sort-product");
const searchArea = document.getElementById("search-product");

UI.updateDisplay();
UI.makeUniques();
addBtn.addEventListener("click", () => {
  if (UI.isEmpty()) {
    alert("Please fill the entire form.");
  } else {
    if (!isNaN(productPriceInp.value) && !isNaN(productCountInp.value)) {
      if (UI.isUrl()) {
        const postData = new Product(
          productNameInp.value,
          productImgInp.value,
          productDescInp.value,
          productPriceInp.value,
          productCatInp.value,
          productCountInp.value
        );
        Process.addProduct(postData, form);
        UI.updateDisplay();
      } else alert("Please enter a valid URL in image URL section in form.");
    } else alert("Please enter valid numbers in price and/or count sections.");
  }
});

productRow.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    const productCard = e.target.closest(".col-lg-4");
    Process.addToCart(productCard.id);
  } else if (e.target.classList.contains("edit-product")) {
    const productCard = e.target.closest(".col-lg-4");
    Process.editProduct(
      productCard.id,
      productNameInp,
      productImgInp,
      productDescInp,
      productPriceInp,
      productCatInp,
      productCountInp,
      form
    );
  } else if (e.target.classList.contains("delete-product")) {
    const productCard = e.target.closest(".col-lg-4");
    Process.deleteProduct(productCard.id);
  }
});

cartBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-plus")) {
    const cartProduct = e.target.closest(".cart-item");
    Process.addToCart(cartProduct.dataset.identifier);
  } else if (e.target.classList.contains("btn-minus")) {
    const cartProduct = e.target.closest(".cart-item");
    Process.subtractFromCart(cartProduct.dataset.identifier);
  } else if (e.target.classList.contains("remove-all-cart")) {
    const cartProduct = e.target.closest(".cart-item");
    Process.deleteFromCart(cartProduct.dataset.identifier);
  }
});

purchaseBtn.addEventListener("click", (e) => {
  Process.purchase();
});

categorySelect.addEventListener("change", (e) => {
  if (e.target.value == "") {
    Process.search(searchArea.value);
  } else Process.filterByCategory(e.target.value);
  if (sortSelect.value != "") {
    Process.sort(sortSelect.value);
  }
});

searchArea.addEventListener("keyup", (e) => {
  Process.search(e.target.value);
  sortSelect.value = "";
});

sortSelect.addEventListener("change", (e) => {
  Process.sort(e.target.value);
  searchArea.value = "";
});
