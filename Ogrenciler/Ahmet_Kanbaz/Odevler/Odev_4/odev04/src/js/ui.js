class UI {
  static clearForm = function() {
    updateProductButton.style.display = 'none';
    createNewProductButton.style.display = 'inline';
    modalProductTitle.textContent = 'Yeni Ürün Oluştur';
    modalProductForm.reset();
  }

  static alertMessage = function (message) {
    alert(message);
  };

  static toastMessage = function (message) {
    const toastBody = `<div class="toast-header">
    <strong class="me-auto">Blog Page</strong>
      <small>${new Date().toLocaleTimeString()}</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ${message}
    </div>`;
    toast.innerHTML = toastBody;
    const toastMessage = new bootstrap.Toast(toast);
    toastMessage.show();
  };

  static createNewProductFromUI(product) {
    const newProductCol = document.createElement("div");
    newProductCol.id = product.id;
    newProductCol.className = "col-lg-3 col-md-6 mb-4";
    newProductCol.innerHTML = `
      <div class="card shadow-lg rounded-3 productCard">
        <img src="${product.imageUrl}" class="card-img-top object-fit-contain img-fluid" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title text-center">${product.name}</h5>
          <span class="card-text fst-italic opacity-75">${product.category}</span>
          <p class="card-text text-truncate my-1">${product.productDetail}</p>
          <div class="d-flex justify-content-around">
            <span class="fs-6">${product.stok} adet</span>
            <span class="fs-6">${product.price} ₺</span></div>
        </div>
        <div class = "d-flex justify-content-evenly align-items-center icons">
          <span class="px-3 pb-2 rounded fa-solid fa-edit" data-bs-toggle="modal" data-bs-target="#addAndUpdateProductModal"></span>
          <span class="fa-solid fa-eye px-3 pb-2 rounded" data-bs-toggle="modal" data-bs-target="#detailProductModal"></span>
          <span class="fa-solid fa-trash px-3 pb-2 rounded"></span>
        </div>
        <div class="mb-3 mt-2 d-flex justify-content-center"><button class="btn btn-info" id="addCart">Sepete Ekle</button></div>
      </div>
    `;
    productList.appendChild(newProductCol);
  }

  static detailProductFromUI = function(product) {
    detailModalImage.src = product.imageUrl;
    detailModalTitle.textContent = product.name;
    detailModalCategory.textContent = product.category;
    detailModalPrice.textContent = product.price;
    detailModalStok.textContent = product.stok;
    detailModalProductContent.textContent = product.productDetail;
  }

  static updateProductFromUI = function(product) {
    updateProductButton.style.display = 'inline';
    createNewProductButton.style.display = 'none';
    modalProductTitle.textContent = 'Ürün Güncelle';
    modalProductName.value = product.name;
    modalProductCategory.value = product.category;
    modalProductImageUrl.value = product.imageUrl;
    modalProductPrice.value = product.price;
    modalProductStok.value = product.stok;
    modalProductDetail.value = product.productDetail;
    updateProductButton.addEventListener("click", function (e) {
      let updateProduct = {
        id: product.id,
        name: modalProductName.value,
        category: modalProductCategory.value,
        imageUrl: modalProductImageUrl.value,
        price: Number(modalProductPrice.value),
        stok: Number(modalProductStok.value),
        productDetail: modalProductDetail.value,
      };
      RequestProducts.updateProductFromRequest(updateProduct.id, updateProduct);
      e.preventDefault();
    });
  }

  static deleteProductFromUI = function(deleteProduct) {
    deleteProduct.remove();
  }

  static showFilterCategories = function () {
    const products = crudProducts.get();
    dropDown4CategoriesFilter.innerHTML = "";
    const tempProducts = [];
    products
      .then((product) => {
        product.forEach((item) => {
          tempProducts.push(item.category);
        });
        const uniqueProducts = [...new Set(tempProducts)];
        uniqueProducts.sort().map((item) => {
          const categoriesDropDownLi = document.createElement("li");
          categoriesDropDownLi.className = "ps-1";
          categoriesDropDownLi.innerHTML = `<input type="checkbox" id="${item}" value="${item}"">
          <label for="${item}">${item}</label>`;
          dropDown4CategoriesFilter.appendChild(categoriesDropDownLi);
        });
      })
      .catch((error) => this.alertMessage(error));
  };

  static updateDisplayForFilter = function(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach((item) => {
      this.createNewProductFromUI(item);
    });
  }

  static clearAllFilters = function() {
    searchInput.value = '';
    selectedDropDown.splice(0, selectedDropDown.length);
    const checkedInputs = document.querySelectorAll('input[type="checkbox"]');
    checkedInputs.forEach((checkBox) => checkBox.checked ? checkBox.checked = false : null);
  }

  static showAllProductsFromUI = function() {
    productList.innerHTML = "";
    crudProducts.get().then((products) => {
      products.forEach((product) => {
        this.createNewProductFromUI(product);
      });
    });
  }
}