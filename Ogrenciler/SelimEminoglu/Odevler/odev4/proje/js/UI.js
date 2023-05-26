const updateModal = document.getElementById("updateProductModal");
const productDescriptionUpdate = document.getElementById("productTypeUpdate");

class UI {
  static showProducts(products) {
    products.map((product) => {
      productList.innerHTML += `<div class="col-5 product-card border mt-3" id=${product.id}>
            <div class="row h-100">
              <div class="col-5 ps-0">
                <img
                  src="${product.image}"
                  alt="images"
                />
                <h5 class="mt-2 ms-2 mb-0">Stok Adedi:</h5>
                <p class="ms-4 mb-1 fs-5">${product.count} Adet</p>
              </div>
              <div class="col-7">
                <h4>${product.name}</h4>
                <h5>Fiyat:</h5>
                <p class="fs-5">${product.price} TL</p>
                <h5>Kategori:</h5>
                <p class="fs-5 mb-1">${product.category}</p>
                <div class="row gap-1 justify-content-around">
                    <button class="card-button bg-primary p-2" data-bs-toggle="modal"
                    data-bs-target="#showİnfoModal">Detay Göster</button>
                    <button class="card-button bg-success p-2" data-bs-toggle="modal"
                    data-bs-target="#updateProductModal">
                    Ürünü Güncelle
                  </button>
                    <button class="card-button bg-danger p-2">
                    Ürünü Kaldır
                  </button>
                    <button class="card-button bg-secondary p-2">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>`;
    });

    productList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.childNodes[1].childNodes[3].childNodes[11].childNodes[1].addEventListener(
          "click",
          () => {
            Json.getProducts().then((response) => {
              response.map((item) => {
                if (item.id == child.id) {
                  showİnfoModal.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].src =
                    item.image;

                  showİnfoModal.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerHTML =
                    item.description;
                }
              });
            });
          }
        );

        child.childNodes[1].childNodes[3].childNodes[11].childNodes[3].addEventListener(
          "click",
          () => {
            Json.getProducts().then((response) => {
              response.map((item) => {
                if (item.id == child.id) {
                  updateModal.children[0].id = child.id;
                  productCategoryUpdate.value = item.category;
                  productCountUpdate.value = item.count;
                  productNameUpdate.value = item.name;
                  productPriceUpdate.value = item.price;
                  productİmageUpdate.value = item.image;
                  productDescriptionUpdate.value = item.description;
                }
              });
            });
          }
        );

        child.childNodes[1].childNodes[3].childNodes[11].childNodes[5].addEventListener(
          "click",
          () => {
            Json.deleteProducts(
              "http://localhost:3000/products/" + child.id
            ).then(() => {
              while (productList.firstChild) {
                productList.removeChild(productList.lastChild);
              }
              console.log("silindi");
              Json.getProducts().then((products) => {
                this.showProducts(products);
              });
            });
          }
        );

        child.childNodes[1].childNodes[3].childNodes[11].childNodes[7].addEventListener(
          "click",
          () => {
            let addBasket = {};
            Json.getProducts().then((products) => {
              products.map((product) => {
                if (product.id == child.id) {
                  addBasket = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    count: 1,
                  };

                  Json.postProducts(
                    "http://localhost:3000/basket",
                    addBasket
                  ).then(() => {
                    Json.getBaskets().then((baskets) => {
                      baskets.map((basket) => {
                        basketList.innerHTML += `<div class="col-12">
                        <img src=${basket.image} alt="images" class="basket-image">
                        <p>${basket.name}</p>
                        <p>${basket.price}</p>
                        <input type="number" value="1">
                        <button>Sepetten Kaldır</button>
                      </div>
                        `;
                      });
                    });
                  });
                }
              });
            });
          }
        );
      }
    });
  }
}
