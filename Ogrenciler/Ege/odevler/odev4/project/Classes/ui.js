import Request from "./request.js";
import productCard from "../Components/productCard.js";
import cartItem from "../Components/cartItem.js";
import createOption from "../Components/option.js";

const productRow = document.getElementById("product-row");
const productNameInp = document.getElementById("product-name");
const productPriceInp = document.getElementById("product-price");
const productDescInp = document.getElementById("product-desc");
const productCatInp = document.getElementById("product-category");
const productCountInp = document.getElementById("product-count");
const productImgInp = document.getElementById("product-img");
const cartBody = document.getElementById("cart-body");
const cartCount = document.getElementById("cart-count");
const categorySelect = document.getElementById("categories");

const productsUrl = "http://localhost:3000/products";
const cartUrl = "http://localhost:3000/cart";

class UI {
  static addProductsToUI(products) {
    productRow.innerHTML = "";
    productRow.innerHTML += products
      .map((product) => productCard(product))
      .join("");
  }

  static addProductsToCartUI(cart) {
    cartBody.innerHTML = "";
    cartBody.innerHTML += cart.map((inCart) => cartItem(inCart)).join("");
  }

  static updateDisplay() {
    Request.get(productsUrl)
      .then((data) => {
        this.addProductsToUI(data);
      })
      .catch((err) => console.log(err));
    Request.get(cartUrl)
      .then((data) => {
        this.addProductsToCartUI(data);
        cartCount.textContent = data.length;
      })
      .catch((err) => console.log(err));
  }

  static uniqueCategories(products) {
    const categoriesSet = new Set(
      products.map((product) => product.category.toUpperCase())
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
    Request.get(productsUrl)
      .then((data) => this.uniqueCategories(data))
      .catch((err) => console.log(err));
  }

  static isEmpty() {
    return (
      productNameInp.value == "" ||
      productPriceInp.value == "" ||
      productDescInp.value == "" ||
      productCatInp.value == "" ||
      productCountInp.value == "" ||
      productImgInp.value == ""
    );
  }

  static isUrl() {
    return (
      productImgInp.value.slice(0, 7) == "http://" ||
      productImgInp.value.slice(0, 8) == "https://"
    );
  }
}

export default UI;
