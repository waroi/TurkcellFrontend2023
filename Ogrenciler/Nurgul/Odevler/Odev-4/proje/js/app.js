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
      this.productList = data; // Tüm ürünleri productList'e kaydet
      this.renderProductList(); // Ürünleri listele
      this.populateCategories(); //Kategoriler için
    })
    .catch(error => console.error(error));
  }

  renderProductList() {
    this.container.innerHTML = ''; // Ürünleri listelemeye başlamadan önce mevcut içeriği temizle

    this.productList.forEach(product => {
      this.createProductCard(product);
    });
  }
  //Kart Oluşturma
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
                      <button type="button" class="btn btn-primary" onclick="productCard.addToCart(${product.id})"> 
                      Add to cart
                      <i class="fa-solid fa-cart-arrow-down"></i>
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

  
  //Ekleme
  addProduct() {
    const form = document.querySelector("#addProductForm");
    const formData = new FormData(form);
    const productData = Object.fromEntries(formData.entries());

    fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Yeni ürünü listeleyen kartı oluşturmak için createProductCard metodunu çağırabilirsiniz.
        this.createProductCard(data);
        // Modalı kapatmak için aşağıdaki satırı kullanabilirsiniz.
        const modal = new bootstrap.Modal(
          document.querySelector("#addProductModal")
        );
        modal.hide();
      })
      .catch((error) => console.error(error));
  }
  //Silme
  async deleteProduct(productId) {
    if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
      try {
        const url = `${this.apiUrl}/${productId}`;
        const response = await fetch(url, {
          method: "DELETE",
        });

        if (response.ok) {
          console.log("Ürün başarıyla silindi.");
          // Ürünü yeniden getir ve listele
          this.fetchProductData();
        } else {
          console.error("Ürün silinirken bir hata oluştu.");
        }
      } catch (error) {
        console.error("Hata:", error);
      }
    }}

   //Düzenle
   async editProduct(productId) {
    try {
      const response = await fetch(`${this.apiUrl}/${productId}`);
      const product = await response.json();
      
      const editForm = document.querySelector("#editProductForm");
      editForm.elements.nameInput.value = product.name;
      editForm.elements.priceInput.value = product.price;
      editForm.elements.categoryInput.value = product.category;
      editForm.elements.contentInput.value = product.content;
      editForm.elements.stockInput.value = product.stock;

      const modal = new bootstrap.Modal(document.querySelector("#editProductModal"));
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
  
  
  // Güncelleme
  async updateProduct(productId, form) {
    const updatedProduct = {
      name: form.elements.nameInput.value,
      price: form.elements.priceInput.value,
      category: form.elements.categoryInput.value,
      content: form.elements.contentInput.value,
      stock: form.elements.stockInput.value,
      img:form.elements.imgInput.value,
    };

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
        this.fetchProductData(); // Ürünleri yeniden çek ve listele
      } else {
        console.error("Ürün güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }
  
  // async addToCart(productId) {
  //   try {
  //   const response = await fetch(`${this.apiUrl}/${productId}`);
  //   const product = await response.json();     if (product) {
  //     this.cartItems.push(product);
  //     this.updateCartIcon();
  //   }
  //   } catch (error) {
  //   console.error("Hata:", error);
  //   }
  //   }
  //   openCartModal() {
  //       const modal = new bootstrap.Modal(document.querySelector("#cartModal"));
  //       const cartItemsContainer = document.querySelector("#cartItemsContainer");
  //       const totalPrice = document.querySelector("#totalPrice");cartItemsContainer.innerHTML = "";
  //       let total = 0;
        
  //       this.cartItems.forEach(item => {
  //       const itemTemplate = `
  //         <div class="cart-item">
  //           <div>${item.name}</div>
  //           <div>${item.price}</div>
  //         </div>
  //       `;
  //       cartItemsContainer.innerHTML += itemTemplate;
  //       total += parseFloat(item.price);
  //       });
        
  //       totalPrice.textContent = total.toFixed(2);
        
  //       modal.show();
  //       }
   
  //Search
  searchProductsByName(searchTerm) {
    const filteredProducts = this.productList.filter(product => {
      const productName = product.name.toLowerCase();
      const searchTermLowerCase = searchTerm.toLowerCase();
      return productName.includes(searchTermLowerCase);
    });

    this.container.innerHTML = ''; // Ürünleri listelemeye başlamadan önce mevcut içeriği temizle

    filteredProducts.forEach(product => {
      this.createProductCard(product);
    });
  }
  //Filtreleme
  populateCategories() {
    // Kategorileri apiden al
    this.productList.forEach(product => {
      const category = product.category;
      if (!this.categories.includes(category)) {
        this.categories.push(category);
      }
    });

    // Seçenekleri doldur
    const categorySelect = document.querySelector("#categorySelect");
    this.categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    // Kategori değiştiğinde filtreleme yap
    categorySelect.addEventListener("change", (event) => {
      const selectedCategory = event.target.value;
      this.filterProductsByCategory(selectedCategory);
    });
  }
  filterProductsByCategory(category) {
    if (category === "") {
      this.renderProductList(); // Kategori seçilmemişse tüm ürünleri listele
    } else {
      const filteredProducts = this.productList.filter(product => {
        return product.category === category;
      });

      this.container.innerHTML = '';

      filteredProducts.forEach(product => {
        this.createProductCard(product);
      });
    }
  }
  //Sıralama
  sortProducts(sortingOption) {
    switch (sortingOption) {
      case "A-Z":
        this.productList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        this.productList.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price":
        this.productList.sort((a, b) => a.price - b.price);
        break;
      default:
        return;
    }
  
    this.renderProductList();
  }
  
}

    
function buyCart() {
    // Sepeti boşalt
    document.getElementById("cartItemsContainer").innerHTML = "";
    document.getElementById("totalPrice").textContent = "";

  
    var cartItems = []; // Sepetteki ürünleri temsil ediyor
    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
    
    }

    
    alert("Purchase completed. Thank you for your order!");
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