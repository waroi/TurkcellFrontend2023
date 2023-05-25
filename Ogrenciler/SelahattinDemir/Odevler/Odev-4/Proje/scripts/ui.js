import Product from "./Components/product.js";
import Fetch from "./fetch.js";
// import Filter from "./filter.js";

class UI {
  static async formListenSubmitFromUI(e) {
    e.preventDefault();
    const id = Date.now();
    const productName = document.getElementById("productName").value.trim();
    const productCategory = document
      .getElementById("productCategory")
      .value.trim();
    const productBrand = document.getElementById("productBrand").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    const productOldPrice = document
      .getElementById("productOldPrice")
      .value.trim();
    const productStock = document.getElementById("productStock").value.trim();
    const ImageUrl = document.getElementById("imgUrl").value.trim();
    const button = document.getElementById("addOrEditButton");
    const title = document.getElementById("productModalLabel");
    // const sortOptions = document.getElementsByName("sort-option");
    const request = new Fetch("http://localhost:3000/posts");

    if (
      productName === "" ||
      productCategory === "" ||
      productBrand === "" ||
      productPrice === "" ||
      productOldPrice === "" ||
      productStock === ""
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if (button.innerHTML === "Düzenle") {
      const productEditId = button.dataset.editProductId;
      const product = new Product(
        productEditId,
        ImageUrl,
        productName,
        productCategory,
        productBrand,
        productPrice,
        productOldPrice,
        productStock
      );
      await request.put(productEditId, product);
      showProducts();

      // Butonu düzenle
      button.innerHTML = "Ekle";
      button.className = "btn btn-success w-25";
      delete button.dataset.editProductId;

      // Başlık düzenle
      title.innerHTML = "Ürün Ekle";
    } else {
      const product = new Product(
        id,
        ImageUrl,
        productName,
        productCategory,
        productBrand,
        productPrice,
        productOldPrice,
        productStock
      );
      await request.post(product);
      showProducts();
    }
  }
  static async editProductFromUI(e) {
    e.preventDefault();
    if (e.target.classList.contains("product-edit-button")) {
      const product = e.target.closest(".col-lg-4");
      const productChangeId = product.id;
      const request = new Fetch("http://localhost:3000/posts");

      const productName = document.getElementById("productName");
      const productCategory = document.getElementById("productCategory");
      const productBrand = document.getElementById("productBrand");
      const productPrice = document.getElementById("productPrice");
      const productOldPrice = document.getElementById("productOldPrice");
      const productStock = document.getElementById("productStock");
      const imageUrl = document.getElementById("imgUrl");
      const button = document.getElementById("addOrEditButton");
      const title = document.getElementById("productModalLabel");

      await request.get().then((data) => {
        const productToEdit = data.find(
          (product) => product.id == productChangeId
        );

        if (productToEdit) {
          imageUrl.value = productToEdit.imageUrl;
          productName.value = productToEdit.name;
          productCategory.value = productToEdit.category;
          productBrand.value = productToEdit.brand;
          productPrice.value = productToEdit.price;
          productOldPrice.value = productToEdit.oldPrice;
          productStock.value = productToEdit.stock;

          button.innerHTML = "Düzenle";
          button.className = "btn btn-warning w-25";
          button.dataset.editProductId = productToEdit.id;

          title.innerHTML = "Ürün Düzenle";
        }
      });
    }
  }

  static async deleteProductFromUI(e) {
    if (e.target.classList.contains("product-delete-button")) {
      const product = e.target.closest(".col-lg-4");
      const productId = product.id;
      const request = new Fetch("http://localhost:3000/posts");

      await request
        .delete(productId)
        .then((response) => {
          console.log(response);
          product.remove();
        })
        .catch((error) => {
          console.log(error);
        });
    }
    showProducts();
    e.preventDefault();
  }
}

export default UI;
