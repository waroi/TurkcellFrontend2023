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
  console.log("addBtn");
});

productRow.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    const productCard = e.target.closest(".col-lg-4");
    console.log("Clicked on add cart");
    Process.addToCart(productCard.id);
  } else if (e.target.classList.contains("edit-product")) {
    console.log("Clicked on edit product");
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
    console.log("Clicked on delete product");
    Process.deleteProduct(productCard.id);
  }
});

cartBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-plus")) {
    console.log("Cart product more");
    const cartProduct = e.target.closest(".cart-item");
    Process.addToCart(cartProduct.dataset.identifier);
  } else if (e.target.classList.contains("btn-minus")) {
    console.log("Cart product less");
    const cartProduct = e.target.closest(".cart-item");
    Process.subtractFromCart(cartProduct.dataset.identifier);
  } else if (e.target.classList.contains("remove-all-cart")) {
    console.log("Remove all");
    const cartProduct = e.target.closest(".cart-item");
    Process.deleteFromCart(cartProduct.dataset.identifier);
  }
});

purchaseBtn.addEventListener("click", (e) => {
  Process.purchase();
  setTimeout(() => {
    Process.removeAllFromCart();
  }, 2500);
  setTimeout(() => {
    location.reload();
  }, 3000);
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
