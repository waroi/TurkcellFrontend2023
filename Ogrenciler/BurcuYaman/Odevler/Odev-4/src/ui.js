class UI {
  loadAllProductsToUI(products, productsInCart) {
    let productAmountInCart = document.getElementById('productAmountInCart');
    console.log(productsInCart.length)
    productAmountInCart.innerHTML = productsInCart.length;
    products.forEach(function (product) {
      ui.addProductToUI(product);
    });

  }
  addProductToUI(product) {
    const productList = document.getElementById("productList");
    productList.innerHTML += ` <div class="col-md-2 product" id="${product.id}">
        <div class="card my-3">
          <img
            src="${product.url}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">
            ${product.name}
            </h5>
            <p class="border border-primary w-50 rounded-3 m-auto text-center">${product.category}</p>
            <div class="stars d-flex justify-content-center mt-4 text-info">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-text text-center fs-5 my-4 product-price">${product.price}</p>
            <div class="productButtons d-flex justify-content-around">
              
            <button
                href="#"
                class="btn btn-danger text-light rounded-circle"
                id="deleteButton"
                ><i class="fa-solid fa-trash" id="deleteIcon"></i
              ></button>
             
              <button
                href="#"
                class="btn btn-secondary text-light rounded-circle"
                id="updateButton"
                ><i class="fa-solid fa-pen-to-square" id="updateIcon"></i
              ></button>
              <button
                href="#"
                class="btn btn-dark text-light rounded-circle"
                id="detailButton"
              >
                <i class="fa-solid fa-cart-plus id=detailIcon"></i
              ></button>
            </div>
          </div>
        </div>
      </div>
            `;
  }
  clearInputs(element1, element2, element3, element4, element5, element6) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
    element5.value = "";
    element6.value = "";
  }
  // deleteProductFromUI(product) {
  //   product.remove();
  // }
  updateProductFromUI(product, card) {
    card.innerHTML += ` <div class="col-md-2 product" id="${product.id}">
    <div class="card my-3">
      <img
        src="${product.url}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title text-center">
        ${product.name}
        </h5>
        <p class="border border-primary w-50 rounded-3 m-auto text-center">${product.category}</p>
        <div class="stars d-flex justify-content-center mt-4 text-info">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p class="card-text text-center fs-5 my-4 product-price">${product.price} TL</p>
        <div class="productButtons d-flex justify-content-around">
          <button
            href="#"
            class="btn btn-danger text-light rounded-circle"
            id="deleteButton"
            ><i class="fa-solid fa-trash" id="deleteIcon"></i
          ></button>
          <button
            href="#"
            class="btn btn-secondary text-light rounded-circle"
            id="updateButton"
            ><i class="fa-solid fa-pen-to-square" id="updateIcon"></i
          ></button>
          <button
            href="#"
            class="btn btn-dark text-light rounded-circle"
            id="detailButton"
          >
            <i class="fa-solid fa-cart-plus" id=detailIcon></i
          ></button>
        </div>
      </div>
    </div>
  </div>
        `;


  }
  searchProductInUI(searchValue) {
    const products = document.querySelectorAll(".product");
    products.forEach(function (product) {
      const productName = product.children[0].children[1].children[0].textContent;
      if (productName.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
        product.setAttribute("style", "display : none !important");
      } else {
        product.setAttribute("style", "display : block");
      }
    });

  }
  filterProductsInUI(categoryName, filteredProducts) {
    console.log(categoryName);
    const productList = document.getElementById("productList");
    const productListItems = productList.querySelectorAll('.card-body');
    productListItems.forEach(function (productListItem) {
      // if (productListItem.parentElement.parentElement.style.display === 'none') {
      //   productListItem.parentElement.parentElement.setAttribute('style', 'display : block !important');
      //   console.log(productListItem.parentElement.parentElement)
      // }
    })




    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
    <li class="breadcrumb-item">
    <a href="./index.html" id="goHome">Ana Sayfa</a>
  </li>
<li class="breadcrumb-item active" aria-current="page">${categoryName}</li>
`;

    productListItems.forEach(function (productListItem) {

      const category = productListItem.children[1].textContent.toLowerCase();
      // console.log(category);
      if (category.indexOf(categoryName) !== -1) {
        productListItem.parentElement.parentElement.setAttribute('style', 'display : block');
        filteredProducts.push(productListItem.parentElement.parentElement);

      } else {
        productListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
      }
    })

  }

  sortProduct(sortedProducts) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    sortedProducts.forEach(function (product) {
      const id = product.getAttribute('id');
      const url = product.children[0].children[0].src;
      const name = product.children[0].children[1].children[0].textContent;
      const category = product.children[0].children[1].children[1].textContent;
      const price = product.children[0].children[1].children[3].textContent;


      productList.innerHTML += ` <div class="col-md-2 product" id="${id}">
      <div class="card my-3">
        <img
          src="${url}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">
          ${name}
          </h5>
          <p class="border border-primary w-50 rounded-3 m-auto text-center">${category}</p>
          <div class="stars d-flex justify-content-center mt-4 text-info">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="card-text text-center fs-5 my-4 product-price">${price}</p>
          <div class="productButtons d-flex justify-content-around">
            
          <button
              href="#"
              class="btn btn-danger text-light rounded-circle"
              id="deleteButton"
              ><i class="fa-solid fa-trash" id="deleteIcon"></i
            ></button>
           
            <button
              href="#"
              class="btn btn-secondary text-light rounded-circle"
              id="updateButton"
              ><i class="fa-solid fa-pen-to-square" id="updateIcon"></i
            ></button>
            <button
              href="#"
              class="btn btn-dark text-light rounded-circle"
              id="detailButton"
            >
              <i class="fa-solid fa-cart-plus" id=detailIcon></i
            ></button>
          </div>
        </div>
      </div>
    </div>
          `;
    }
    );
  };

  detailProductInUI(url, name, price, description, amount) {

    let detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
    detailModal.show();

    const detailModalBody = document.getElementById('detailModalBody');

    detailModalBody.innerHTML = `     <div class="row">
    <div class="col-md-4">
      <img
        src="${url}"
        alt=""
        class="w-100"
      />
    </div>
    <div class="col-md-8">
      <h5>${name}</h5>
      <p>yıldızlar</p>
      <p>${amount}</p>
      <p>
       ${description}
      </p>

      <h5 class="w-50">${price}</h5>
      <select
        class="form-select w-25 mt-4"
        aria-label="Default select example"
        id="quantityInput"
      >
        <option selected>Adet</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>
  `;

  }
  goToCartInUI(cartProducts) {
    console.log(cartProducts)

    let cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
    const cartModalBody = document.getElementById('cartModalBody');
    cartModalBody.innerHTML = '';
    // cartModalBody.innerHTML = '';
    cartProducts.map(function (cartProduct) {
      cartModalBody.innerHTML += `
      <div class="row" id=${cartProduct.id}>
      <div class="col-md-4">
        <img
        id="productImageInCart"
          src="${cartProduct.url}"
          alt=""
          class="w-100"
        />
      </div>
      <div class="col-md-7">
        <h5 id="productNameInCart">${cartProduct.name}</h5>
        <p id="productCategoryInCart">${cartProduct.category}</p>
  
        <h5 class="w-50" id="productPriceInCart">${cartProduct.price}</h5>
     <p id="productQuantityInCart"> ${cartProduct.quantity}</p>
       
      </div>
      <div class="col-md-1">
      <button
      href="#"
      class="btn btn-danger text-light rounded-circle"
      id="deleteButtonInCart"
      ><i class="fa-solid fa-trash" id="deleteIconInCart"></i
    ></button>
    </div>

    </div>
      `

    })

  }
}