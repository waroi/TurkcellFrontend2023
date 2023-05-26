import Product from "./Components/product.js";
import Fetch from "./fetch.js";
import Filter from "./filter.js";
import BasketOffCanvas from "./Components/basketOffcanvas.js";

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
    const sort = document.getElementById("sort");
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
      Filter.sortProductsFromFilter(sort.value);
      showProducts();

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
      console.log(existingProduct);
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
      }
      Filter.sortProductsFromFilter(sort.value);
      showProducts();
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
      showProducts();
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

        console.log("Ürün alındı.", addProduct);

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

        console.log("Sepete eklenecek ürün: ", selectedProduct);

        // Sepete ekle
        const basketItems = await basketRequest.get();
        const existingItem = basketItems.find(
          (item) => item.id === selectedProduct.id
        );

        console.log("Sepetteki ürün: ", existingItem ? existingItem.stock : 0);

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
            console.log("Ürün sepete eklendi.");
          } else {
            alert("Ürün stok adedinden fazla eklenemez.");
          }
        } else {
          // Eğer ürün daha önce sepete eklenmemişse, direkt olarak eklenir
          await basketRequest.post(selectedProduct);
          console.log("Ürün sepete eklendi.");
        }
      } catch (error) {
        console.log("Sepete ekleme işlemi başarısız oldu.", error);
      }
      showProductstoBasket();
    }
  }
}

export default UI;
