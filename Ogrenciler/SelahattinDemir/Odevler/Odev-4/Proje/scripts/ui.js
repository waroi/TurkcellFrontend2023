import Product from "./Components/product.js";
import Fetch from "./fetch.js";
import Filter from "./filter.js";
import { showProducts, showProductstoBasket, showBrands } from "./app.js";

const viewGridList = document.getElementById("viewGrid");
const viewList = document.getElementById("viewList");
const brandsList = document.getElementById("brandList");
const basketList = document.getElementById("basketList");

class UI {
  static isValidUrl(url) {
    const urlPattern =
      /^https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    return urlPattern.test(url);
  }
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
    const ImageUrlFeedback = document.getElementById("imageUrlFeedback");
    const button = document.getElementById("addOrEditButton");
    const title = document.getElementById("productModalLabel");
    const sort = document.getElementById("sort");
    const form = document.getElementById("product-form");
    const request = new Fetch("http://localhost:3000/posts");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    if (!this.isValidUrl(ImageUrl)) {
      ImageUrl.classList.add("is-invalid");
      ImageUrlFeedback.classList.add("d-block");
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
      viewGridList.innerHTML = "";
      viewList.innerHTML = "";
      showProducts();
      brandsList.innerHTML = "";
      showBrands();
      Filter.sortProductsFromFilter(sort.value);

      // Butonu düzenle
      button.innerHTML = "Ekle";
      button.className = "btn btn-success w-25";
      delete button.dataset.editProductId;

      // Başlık düzenle
      title.innerHTML = "Ürün Ekle";
    } else {
      const existingProduct = await request.get().then((data) => {
        return data.find((product) => product.name === productName);
      });
      if (existingProduct) {
        // Aynı isimde ürün bulundu, stok adetini artır
        const newStock =
          parseInt(existingProduct.stock) + parseInt(productStock);
        const updatedProduct = new Product(
          existingProduct.id,
          existingProduct.imageUrl,
          existingProduct.name,
          existingProduct.category,
          existingProduct.brand,
          existingProduct.price,
          existingProduct.oldPrice,
          newStock.toString()
        );
        await request.put(existingProduct.id, updatedProduct);
        viewGridList.innerHTML = "";
        viewList.innerHTML = "";
        showProducts();
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
        viewGridList.innerHTML = "";
        viewList.innerHTML = "";
        showProducts();
        brandsList.innerHTML = "";
        showBrands();
        Filter.sortProductsFromFilter(sort.value);
      }
    }
  }

  static async editProductFromUI(e) {
    e.preventDefault();
    if (e.target.classList.contains("product-edit-button")) {
      const product = e.target.closest(".productList-card");
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
      const product = e.target.closest(".productList-card");
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

      viewGridList.innerHTML = "";
      viewList.innerHTML = "";
      showProducts();
      brandsList.innerHTML = "";
      showBrands();
    }
    e.preventDefault();
  }

  static async addProductToBasketFromUI(e) {
    e.preventDefault();
    if (e.target.classList.contains("basketBtn")) {
      const product = e.target.closest(".productList-card");
      const productChangeId = product.id;

      const request = new Fetch("http://localhost:3000/posts");
      const basketRequest = new Fetch("http://localhost:3000/basket");

      try {
        // Ürünü al
        const addProduct = await request
          .get()
          .then((data) => {
            return data.find((product) => product.id == productChangeId);
          })
          .catch((error) => {
            console.log(error);
          });

        // Yalnızca seçilen ürünü sepete eklemek için yeni bir ürün nesnesi oluştur
        const selectedProduct = {
          id: addProduct.id,
          imageUrl: addProduct.imageUrl,
          name: addProduct.name,
          category: addProduct.category,
          brand: addProduct.brand,
          price: addProduct.price,
          oldPrice: addProduct.oldPrice,
          stock: "1",
        };

        // Sepete ekle
        const basketItems = await basketRequest.get();
        const existingItem = basketItems.find(
          (item) => item.id === selectedProduct.id
        );

        if (existingItem) {
          // Eğer ürün zaten sepete eklenmişse, stok adedini kontrol et
          const newStock =
            Number(existingItem.stock) + Number(selectedProduct.stock);
          if (newStock <= Number(addProduct.stock)) {
            // Fiyatı güncelle
            const pricePerItem =
              Number(existingItem.price) / Number(existingItem.stock);
            const totalPrice = pricePerItem * newStock;
            const updatedProduct = {
              ...existingItem,
              stock: String(newStock),
              price: String(totalPrice),
            };
            await basketRequest.put(existingItem.id, updatedProduct);
            basketList.innerHTML = "";
            showProductstoBasket();
          } else {
            alert("Ürün stok adedinden fazla eklenemez.");
          }
        } else {
          // Eğer ürün daha önce sepete eklenmemişse, direkt olarak eklenir
          await basketRequest.post(selectedProduct);
          alert("Ürün sepete eklendi.");
          basketList.innerHTML = "";
          showProductstoBasket();
        }
      } catch (error) {
        console.log("Sepete ekleme işlemi başarısız oldu.", error);
      }
    }
  }
}

export default UI;
