const form = document.getElementById("product-form");
const productNameInput = document.getElementById("productName");
const productDescriptionInput = document.getElementById("productDescription");
const priceInput = document.getElementById("price");
const stockQuantityInput = document.getElementById("stockQuantity");
const productList = document.getElementById("products");
const filter = document.getElementById("filter");

const request = new Requestv2("http://localhost:3000/products");
var ui = new UI();

eventListeners();
getAllProducts();

function eventListeners() {
  form.addEventListener("submit", addProduct);
  productList.addEventListener("click", deleteProduct);
  filter.addEventListener("keyup", filterProducts);
  productList.addEventListener("click", openUpdateProductModal);
  document.getElementById("saveChanges").addEventListener("click", function (e) {
      const id = document
        .getElementById("editModal")
        .querySelector(".product-card")
        .getAttribute("data-id");
      updateProduct(id);
      e.preventDefault();
    });
  document.getElementById("sortByName").addEventListener("click", sortProductsByName);
  document.getElementById("sortByPrice").addEventListener("click", sortProductsByPrice);
  
}

function getAllProducts(sortType) {
  request
    .get()
    .then((products) => {
      if (sortType === "name") {
        products.sort((a, b) => a.productName.localeCompare(b.productName));
      } else if (sortType === "price") {
        products.sort((a, b) => a.price - b.price);
      }
      ui.addAllProductsToUI(products);
    })
    .catch((err) => {
      console.log(err);
    });
}


function addProduct(e) {
  const productName = productNameInput.value.trim();
  const productDescription = productDescriptionInput.value.trim();
  const price = priceInput.value.trim();
  const stockQuantity = stockQuantityInput.value.trim();

  if (
    productName === "" ||
    productDescription === "" ||
    price === "" ||
    stockQuantity === ""
  ) {
    alert("Lütfen Tüm Alanları Doldurun");
  } else {
    request
      .post({
        productName: productName,
        productDescription: productDescription,
        price: price,
        stockQuantity: stockQuantity,
      })
      .then((product) => {
        ui.addProductToUI(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  productNameInput.value = "";
  productDescriptionInput.value = "";
  priceInput.value = "";
  stockQuantityInput.value = "";

  e.preventDefault();
}

function deleteProduct(e) {
  if (e.target.id === "delete-product") {
    e.preventDefault();
    const id = e.target.closest(".product-card").getAttribute("data-id");
    request
      .delete(id)
      .then((message) => {
        ui.deleteProductFromUI(e.target.closest(".product-card"));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function filterProducts(e) {
  const filterValue = e.target.value.toLowerCase();
  const productNames = document.querySelectorAll(".product-name");
  ui.filterProductsOnUI(filterValue, productNames);
}

function openUpdateProductModal(e) {
  if (e.target.id === "edit-product") {
    const id = e.target.closest(".product-card").getAttribute("data-id");
    request
      .getOne(id)
      .then((product) => {
        const updateModalElement = document.getElementById("editModal");
        updateModalElement.setAttribute("data-id", product.id);
        const updateModal = new bootstrap.Modal(updateModalElement);
        updateModal.show();
        document.getElementById("editProductName").value = product.productName;
        document.getElementById("editProductDescription").value =
          product.productDescription;
        document.getElementById("editPrice").value = product.price;
        document.getElementById("editStockQuantity").value =
          product.stockQuantity;
        const saveChangesButton = document.getElementById("saveChanges");

        let onSaveChangesClick = () => {
          updateProduct(product.id);
          saveChangesButton.removeEventListener("click", onSaveChangesClick);
        };

        saveChangesButton.addEventListener("click", onSaveChangesClick);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function updateProduct(id) {
  const productName = document.getElementById("editProductName").value.trim();
  const productDescription = document
    .getElementById("editProductDescription")
    .value.trim();
  const price = document.getElementById("editPrice").value.trim();
  const stockQuantity = document
    .getElementById("editStockQuantity")
    .value.trim();

  if (
    productName === "" ||
    productDescription === "" ||
    price === "" ||
    stockQuantity === ""
  ) {
    alert("Lütfen Tüm Alanları Doldurun");
  } else {
    request
      .put(id, {
        productName: productName,
        productDescription: productDescription,
        price: price,
        stockQuantity: stockQuantity,
      })
      .then((updatedProduct) => {
        ui.updateProductInUI(updatedProduct);
        const updateModal = new bootstrap.Modal(
          document.getElementById("editModal")
        );
        updateModal.hide();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function sortProductsByName() {
    request
        .get()
        .then((products) => {
            ui.sortProductsByName(products);
        })
        .catch((err) => {
            console.log(err);
        });
}

function sortProductsByPrice() {
    request
        .get()
        .then((products) => {
            ui.sortProductsByPrice(products);
        })
        .catch((err) => {
            console.log(err);
        });
}


