class UI {
  addProductsFromDB() {
    productList.innerHTML = "";
    request.get().then((products) => {
      products.map((product) => {
        productList.innerHTML += `
    <div class="col-lg-4 col-sm-6">
      <div class="product-card position-relative bg-white" data-id="${
        product.id
      }">
           <div class="product-tumb d-flex align-items-center justify-content-center">
              <a >
                <img class="w-100" src="${product.image}" alt="${product.name}">
              </a>
           </div>             
           <div class="product-details p-4">
             <span class="product-catagory fw-bold  text-uppercase">${
               product.category
             }</span>
             <span class="product-stock fw-bold float-end  text-uppercase">Stock:${
               product.stock
             }</span>
             <h4 class="mt-2">
               <a data-bs-toggle="tooltip" data-bs-placement="top" title="${
                 product.name
               }"  class="product-title fs-6 fw-bold text-truncate text-dark text-uppercase d-block">
                 ${product.name}
               </a>
             </h4>
             <div class="product-bottom-details d-md-flex justify-content-between overflow-hidden pt-4">
               <div class="product-price text-secondary fs-6">
                 <h5 class="d-inline-block">Price:<span>${
                   product.price
                 }</span>$</h5>
               </div>
             <div class="product-links text-end">
              
              <a class="btn btn-secondary fs-6 addCart" ${
                product.stock != 0
                  ? `onclick="cart.addCart(${product.id})"`
                  : `onclick="ui.toastUI('Product out of stock','danger')"`
              } >
                <i class="fa fa-shopping-cart"></i>
              </a>
             
              <a onClick="product.editProduct(${
                product.id
              })" class="btn btn-secondary  fs-6 editBtn" data-bs-toggle="modal" data-bs-target="#create-modal" >
                <i class="fa fa-edit"></i>
              </a>
              <a onClick="product.deleteProduct(${
                product.id
              })" class="btn btn-secondary  fs-6 deleteBtn">
                <i class="fa fa-trash"></i>
              </a>
             </div>
             </div>
           </div>
      </div>
    </div>
  `;
      });
      ui.filterCategories();
    });
  }
  clearInputs() {
    nameInput.value = "";
    priceInput.value = "";
    categoryInput.value = "";
    imageInput.value = "";
    stockInput.value = "";
  }
  fillInputs(id) {
    request.get().then((products) => {
      products.map((product) => {
        if (product.id == id) {
          document.querySelector("#create-modal-title").textContent =
            "Edit Product";
          nameInput.value = product.name;
          priceInput.value = product.price;
          categoryInput.value = product.category;
          imageInput.value = product.image;
          stockInput.value = product.stock;
        }
      });
    });
  }
  showAlert(message, className) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${className} mb-0 fs-6 fw-bold text-center text-uppercase p-2`;
    alert.textContent = message;
    document.querySelector(".alert-container").appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
  addProductToUI(product) {
    productList.innerHTML += `
    <div class="col-lg-4 col-sm-6">
      <div class="product-card position-relative bg-white" data-id="${
        product.id
      }">
           <div class="product-tumb d-flex align-items-center justify-content-center">
              <a >
                <img class="w-100" src="${product.image}" alt="${product.name}">
              </a>
           </div>             
           <div class="product-details p-4">
             <span class="product-catagory fw-bold  text-uppercase">${
               product.category
             }</span>
             <span class="product-stock fw-bold float-end  text-uppercase">Stock:${
               product.stock
             }</span>
             <h4 class="mt-2">
               <a data-bs-toggle="tooltip" data-bs-placement="top" title="${
                 product.name
               }"  class="product-title fs-6 fw-bold text-truncate text-dark text-uppercase d-block">
                 ${product.name}
               </a>
             </h4>
             <div class="product-bottom-details d-md-flex justify-content-between overflow-hidden pt-4">
               <div class="product-price text-secondary fs-6">
                 <h5 class="d-inline-block">Price:<span>${
                   product.price
                 }</span>$</h5>
               </div>
             <div class="product-links text-end">
              
              <a class="btn btn-secondary fs-6 addCart" ${
                product.stock != 0
                  ? `onclick="cart.addCart(${product.id})"`
                  : `onclick="ui.toastUI('Product out of stock','danger')"`
              } >
                <i class="fa fa-shopping-cart"></i>
              </a>
             
              <a onClick="product.editProduct(${
                product.id
              })" class="btn btn-secondary  fs-6 editBtn" data-bs-toggle="modal" data-bs-target="#create-modal" >
                <i class="fa fa-edit"></i>
              </a>
              <a onClick="product.deleteProduct(${
                product.id
              })" class="btn btn-secondary  fs-6 deleteBtn" >
                <i class="fa fa-trash"></i>
              </a>
             </div>
             </div>
           </div>
      </div>
    </div>
  `;
    ui.toastUI("Product added successfully", "success");
    ui.filterCategories();
  }
  deleteProductFromUI(id) {
    const products = document.querySelectorAll(".product-card");
    products.forEach((product) => {
      if (product.getAttribute("data-id") == id) {
        product.parentElement.remove();
      }
    });
    ui.filterCategories();
  }
  filterCategories() {
    categoryList.innerHTML = "";

    request.get().then((products) => {
      const categories = products.map((product) => product.category);
      const uniqueCategories = [...new Set(categories)];
      categoryList.innerHTML += `
      <option value="all">All</option>
      `;
      uniqueCategories.forEach((category) => {
        categoryList.innerHTML += `
        <option value="${category}">${category}</option>
        `;
      });
    });
  }
  filterAndSearch(e) {
    const posts = document.querySelectorAll(".product-card");
    const filterValue = categoryList.value;
    let searchValue = "";

    if (window.innerWidth < 992) {
      searchValue = document.querySelector(".smallSearch").value.toLowerCase();
    } else {
      searchValue = document.querySelector(".bigSearch").value.toLowerCase();
    }

    posts.forEach((post) => {
      const category = post.querySelector(".product-catagory").textContent;
      const title = post
        .querySelector(".product-title")
        .textContent.toLowerCase()
        .trim();
      if (filterValue === "all" || filterValue === category) {
        if (title.includes(searchValue)) {
          post.parentElement.style.display = "block";
        } else {
          post.parentElement.style.display = "none";
        }
      } else {
        post.parentElement.style.display = "none";
      }
    });
  }
  sortProducts() {
    const products = Array.from(document.querySelectorAll(".product-card"));
    const sortValue = sortSelect.value;

    const sortedProducts = products.sort((a, b) => {
      const aId = a.getAttribute("data-id");
      const bId = b.getAttribute("data-id");

      if (sortValue === "lowest") {
        return (
          a.querySelector(".product-price span").textContent -
          b.querySelector(".product-price span").textContent
        );
      } else if (sortValue === "highest") {
        return (
          b.querySelector(".product-price span").textContent -
          a.querySelector(".product-price span").textContent
        );
      } else if (sortValue === "nameAZ") {
        return a
          .querySelector(".product-title")
          .textContent.localeCompare(
            b.querySelector(".product-title").textContent
          );
      } else if (sortValue === "nameZA") {
        return b
          .querySelector(".product-title")
          .textContent.localeCompare(
            a.querySelector(".product-title").textContent
          );
      } else {
        return aId - bId;
      }
    });

    productList.innerHTML = "";

    sortedProducts.forEach((product) => {
      const div = document.createElement("div");
      if (product.parentElement.style.display === "none") {
        div.style.display = "none";
      }
      div.className = "col-lg-4 col-sm-6";
      div.appendChild(product);
      productList.appendChild(div);
    });
  }
  cartUI() {
    cartList.innerHTML = "";
    cartRequest.get().then((data) => {
      shoppingCart.innerHTML = `
        <i class="fa-solid fa-cart-shopping text-primary fa-xl"></i>
        <span class="count text-white bg-danger text-center position-absolute rounded-circle">${data.length}</span>
      `;
      Promise.all(data.map((product) => request.get(product.id))).then(
        (products) => {
          data.forEach((product, index) => {
            const { name, price, image, count, id, stock } = product;
            cartList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
              <div class="d-flex align-items-center">
                <img src="${image}" alt="${name}" class="img-fluid" style="width: 50px;">
                <div class="">
                  <h6 class="mb-0">${name}</h6>
                  <span class="text-secondary">Price: $${price}</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <span class="me-3">Quantity: ${count}</span>
                <button class="btn btn-danger btn-sm remove-cart" data-id="${id}" onClick="cart.decreaseCart(${id})">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button class="btn btn-success btn-sm ms-2" data-id="${id}" onClick="cart.increaseCart(${id})">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </li>
          `;
          });
          totalPrice.textContent = data.reduce(
            (total, product) => total + product.price * product.count,
            0
          );
        }
      );
    });
  }
  toastUI(message, type) {
    const toast = document.createElement("div");
    toast.className = `toast bg-${type} text-white`;
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "10px";
    toast.style.right = "10px";
    toast.style.zIndex = "9999";
    toast.style.minWidth = "300px";
    toast.style.padding = "10px";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    toast.style.display = "none";
    document.body.appendChild(toast);
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 2000);
  }
}
