import Request from "./request.js";
import productCard from "../Components/productCard.js";
import cartItem from "../Components/cartItem.js";

const productRow = document.getElementById("product-row");
const productNameInp = document.getElementById("product-name");
const productPriceInp = document.getElementById("product-price");
const productDescInp = document.getElementById("product-desc");
const productCatInp = document.getElementById("product-category");
const productCountInp = document.getElementById("product-count");
const productImgInp = document.getElementById("product-img");
const cartBody = document.getElementById("cart-body");

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
      .then((data) => this.addProductsToUI(data))
      .catch((err) => console.log(err));
    Request.get(cartUrl)
      .then((data) => this.addProductsToCartUI(data))
      .catch((err) => console.log(err));
  }
}

export default UI;
