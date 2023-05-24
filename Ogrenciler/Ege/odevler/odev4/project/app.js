import UI from "./Classes/ui.js";
import Process from "./Classes/process.js";
import Product from "./Classes/product.js";
const productNameInp = document.getElementById("product-name");
const productPriceInp = document.getElementById("product-price");
const productDescInp = document.getElementById("product-desc");
const productCatInp = document.getElementById("product-category");
const productCountInp = document.getElementById("product-count");
const productImgInp = document.getElementById("product-img");
const form = document.querySelector("form");
const addBtn = document.getElementById("add-submit");

UI.updateDisplay();

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
