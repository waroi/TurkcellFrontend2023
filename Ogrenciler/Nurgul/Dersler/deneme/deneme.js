class ProductCard {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.container = document.querySelector('.productList');
    this.productList = [];
    this.categories = [];
    this.cartItems = []; // Sepet öğelerini tutmak için dizi eklendi
  }

  fetchProductData() {
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        this.productList = data;
        this.renderProductList();
        this.populateCategories();
      })
      .catch(error => console.error(error));
  }

  renderProductList() {
    this.container.innerHTML = '';
    this.productList.forEach(product => {
      this.createProductCard(product);
    });
  }

  createProductCard(product) {
    const modalId = `contentModal-${product.id}`;

    const cardTemplate = `
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${product.img}" class="img-fluid w-100 rounded-start img-content" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text price">${product.price}</p>
              <p class="card-text">${product.category}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
                Detail
              </button>
              <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="${modalId}Label">Features</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ${product.content} <br>
                      Stock: ${product.stock}
                    </div>
                    <div class="modal-footer bi-text-left">
                      <p class="price">${product.price}</p>
                      <div>
                        <button type="button" class="btn btn-primary" onclick="productCard.addToCart(${product.id})"> // Add to cart butonuna onclick olayı eklendi
                          Add to cart
                          <i class="fa-solid fa-cart-arrow-down"></i>
                        </button>
                        <button type="button" class="btn btn-primary" onclick="productCard.editProduct(${product.id})">
                          Edit
                        </button>
                        <button type="button" class="btn btn-primary " onclick="deleteProduct(${product.id})">
                          Delete
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML += cardTemplate;
  }

  addToCart(productId) {
    const product = this.productList.find(item => item.id === productId); // Ürünü productId'ye göre bul

    if (product) {
      this.cartItems.push(product); // Ürünü sepete ekle
      this.updateCartIcon(); // Sepet ikonunu güncelle
    }
  }

  updateCartIcon() {
  const cartIcon = document.querySelector("#item-count");
  cartIcon.textContent = this.cartItems.length; // Sepet öğelerinin sayısını güncelle
  }
  
  openCartModal() {
  const modal = new bootstrap.Modal(document.querySelector("#cartModal"));
  const cartItemsContainer = document.querySelector("#cartItemsContainer");
  const totalPrice = document.querySelector("#totalPrice");
  cartItemsContainer.innerHTML = ""; // Önceki sepet öğelerini temizle

let total = 0;

this.cartItems.forEach(item => {
const itemTemplate = `
  <div class="cart-item">
    <div>${item.name}</div>
    <div>${item.price}</div>
  </div>
`;
cartItemsContainer.innerHTML += itemTemplate;
total += parseFloat(item.price);
});

totalPrice.textContent = total.toFixed(2);

modal.show();
}

addProduct() {
const form = document.querySelector("#addProductForm");
const formData = new FormData(form);
const productData = Object.fromEntries(formData.entries());fetch(this.apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(productData),
})
  .then((response) => response.json())
  .then((data) => {
    this.createProductCard(data);
    const modal = new bootstrap.Modal(
      document.querySelector("#addProductModal")
    );
    modal.hide();
  })
  .catch((error) => console.error(error));
}

async deleteProduct(productId) {
if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
try {
const url =` ${this.apiUrl}/${productId}`;
const response = await fetch(url, {
method: "DELETE",
});    if (response.ok) {
  console.log("Ürün başarıyla silindi.");
  this.fetchProductData();
  this.updateCartIcon(); // Ürün silindiğinde sepet ikonunu güncelle
} else {
  console.error("Ürün silinirken bir hata oluştu.");
}
} catch (error) {
console.error("Hata:", error);
}
}
}

async editProduct(productId) {
try {
const response = await fetch(`${this.apiUrl}/${productId}`);
const product = await response.json();  const editForm = document.querySelector("#editProductForm");
editForm.elements.nameInput.value = product.name;
editForm.elements.priceInput.value = product.price;
editForm.elements.categoryInput.value = product.category;
editForm.elements.contentInput.value = product.content;
editForm.elements.stockInput.value = product.stock;

const modal = new bootstrap.Modal(
document.querySelector("#editProductModal")
);
modal.show();

editForm.addEventListener("submit", (event) => {
event.preventDefault();
this.updateProduct(productId, editForm);
modal.hide();
});
} catch (error) {
console.error("Hata:", error);
}
}

async updateProduct(productId, form) {
const updatedProduct = {
name: form.elements.nameInput.value,
price: form.elements.priceInput.value,
category: form.elements.categoryInput.value,
content: form.elements.contentInput.value,
stock: form.elements.stockInput.value,
img: form.elements.imgInput.value};

try {
const response = await fetch(`${this.apiUrl}/${productId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedProduct),
});

if (response.ok) {
  console.log("Ürün başarıyla güncellendi.");
  this.fetchProductData();
} else {
  console.error("Ürün güncellenirken bir hata oluştu.");
}
} catch (error) {
console.error("Hata:", error);
}
}

async addToCart(productId) {
try {
const response = await fetch(`${this.apiUrl}/${productId}`);
const product = await response.json();     if (product) {
  this.cartItems.push(product);
  this.updateCartIcon();
}
} catch (error) {
console.error("Hata:", error);
}
}

openCartModal() {
const modal = new bootstrap.Modal(document.querySelector("#cartModal"));
const cartItemsContainer = document.querySelector("#cartItemsContainer");
const totalPrice = document.querySelector("#totalPrice");cartItemsContainer.innerHTML = "";
let total = 0;

this.cartItems.forEach(item => {
const itemTemplate = `
  <div class="cart-item">
    <div>${item.name}</div>
    <div>${item.price}</div>
  </div>
`;
cartItemsContainer.innerHTML += itemTemplate;
total += parseFloat(item.price);
});

totalPrice.textContent = total.toFixed(2);

modal.show();
}
}

const addProductButton = document.querySelector("#addProductButton");
addProductButton.addEventListener("click", () => {
productCard.addProduct();
});

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", (event) => {
const searchTerm = event.target.value;
productCard.searchProductsByName(searchTerm);
});

const sortingSelect = document.querySelector("#sortingSelect");
sortingSelect.addEventListener("change", (event) => {
const selectedOption = event.target.value;
productCard.sortProducts(selectedOption);
});

const cartButton = document.querySelector("#cartButton");
cartButton.addEventListener("click", () => {
productCard.openCartModal();
});

const apiUrl = "http://localhost:3000/product";
const productCard = new ProductCard(apiUrl);
productCard.fetchProductData();

function deleteProduct(productId) {
productCard.deleteProduct(productId);
}

function addToCart(productId) {
productCard.addToCart(productId);
}   