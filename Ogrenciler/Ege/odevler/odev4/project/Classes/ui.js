import Request from "./request.js";
import productCard from "../Components/productCard.js";

const productRow = document.getElementById("product-row");

const productsUrl = "http://localhost:3000/products";

class UI {
  static addProductsToUI(products) {
    productRow.innerHTML = "";
    productRow.innerHTML += products
      .map((product) => productCard(product))
      .join("");
  }

  static updateDisplay() {
    Request.get(productsUrl)
      .then((data) => this.addProductsToUI(data))
      .catch((err) => console.log(err));
  }
}

export default UI;
