//Form elements
const productName = document.getElementById('product-name');
const categorySelect = document.getElementById('category-select');
const productExplanation = document.getElementById('explanation');
const urlInput = document.getElementById('url-input');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const productList = document.getElementById('product-list');
//buttons
const deleteButtons = document.querySelectorAll('.delete-button');
const closeButtons = document.querySelectorAll('.close-form');
const addProductButton = document.getElementById('add-product-btn');
const basketMenu = document.querySelector('.basketMenu');
const basketList = document.getElementById('basketList');
const saveOrUpdateModal = document.getElementById('addProduct');
const basketNotification = document.getElementById('basketCount');

// validations
const nameValidation = document.getElementById('nameValidation');
const explanationValidation = document.getElementById('explanationValidation');
const imageValidation = document.getElementById('imageValidation');
const categoryValidation = document.getElementById('categoryValidation');
const priceValidation = document.getElementById('priceValidation');
const stockValidation = document.getElementById('stockValidation');

// categories Count
const materialsCount = document.getElementById('materialsCount');
const allCount = document.getElementById('allCount');
const patternsCount = document.getElementById('patternsCount');
const macramesCount = document.getElementById('macramesCount');
const basketTotalPrice = document.getElementById('basketTotalPrice');


class UI {
  static main() {
    UI.listenEvent();
    UI.addProductToUI();
    UI.showOrderInBasket();
  }

  static listenEvent() {
    const saveOrUpdateButton = document.getElementById('saveOrUpdateButton');

    basketMenu.addEventListener('click', function (e) {
      e.stopPropagation();
    })

    saveOrUpdateButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (saveOrUpdateButton.innerHTML == "Save") {
        UI.saveProduct();

      } else {
        UI.updateProduct(saveOrUpdateButton.getAttribute("blogId"));
      }
    });

    addProductButton.addEventListener('click', function () {
      modalTitle.innerHTML = "Add Product";
      saveOrUpdateButton.innerHTML = "Save";
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', function () {
        UI.clearForm();
      });
    });
  }

  static async fillForm(product) {
    productName.value = product.name;
    productExplanation.value = product.explanation;
    urlInput.value = product.image;
    categorySelect.value = product.category;
    priceInput.value = product.price;
    quantityInput.value = product.stock;
  }

  static clearForm() {
    productName.value = '';
    productExplanation.value = '';
    urlInput.value = '';
    categorySelect.value = '';
    priceInput.value = '';
    quantityInput.value = '';
    saveOrUpdateButton.innerHTML = "Save";
    modalTitle.innerHTML = "Add Product";
    UI.closeModal();
  }

  static closeModal() {
    const modal = document.getElementById('addProduct');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  }

  static saveProduct() {
    if (UI.formValidation()) {
      const newProduct = new Product(productName.value, productExplanation.value, urlInput.value, categorySelect.value, UI.formatPrice(priceInput.value), quantityInput.value);
      Operation.saveProduct(newProduct);
      UI.addProductToUI();
      UI.clearForm();
    }
  }

  static formatPrice(price) {
    if (!price.includes(".")) {
      return price + ".00";
    }
    return price;
  }

  static formValidation() {
    let isValid = true;
    const name = productName.value.trim();
    const explanation = productExplanation.value.trim();
    const url = urlInput.value.trim();
    const category = categorySelect.value;
    const price = priceInput.value.trim();
    const quantity = quantityInput.value.trim();

    // Validate name
    if (name.length < 5 || name.length > 40) {
      nameValidation.innerText = "Name should be between 5 and 40 characters";
      isValid = false;
    } else {
      nameValidation.innerText = "";
    }

    // Validate explanation
    if (explanation.length === 0 || explanation.length > 100) {
      explanationValidation.innerText = "Explanation should be between 1 and 50 characters";
      isValid = false;
    } else {
      explanationValidation.innerText = "";
    }

    // Validate URL
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!url.match(urlPattern)) {
      imageValidation.innerText = "Please enter a valid URL";
      isValid = false;
    } else {
      imageValidation.innerText = "";
    }

    // Validate category
    if (category === "Select Categories") {
      categoryValidation.innerText = "Please select a category";
      isValid = false;
    } else {
      categoryValidation.innerText = "";
    }

    // Validate price
    if (price === "" || price <= 0) {
      priceValidation.innerText = "Please enter a valid price";
      isValid = false;
    } else {
      priceValidation.innerText = "";
    }

    // Validate quantity
    if (quantity === "" || quantity < 1) {
      stockValidation.innerText = "Please enter a valid amount. If the stock is out of stock, you can delete the product.";
      isValid = false;
    } else {
      stockValidation.innerText = "";
    }


    return isValid;
  }

  static async updateProduct(productId) {
    if (UI.formValidation()) {
      const newProduct = new Product(productName.value, productExplanation.value, urlInput.value, categorySelect.value, UI.formatPrice(priceInput.value), quantityInput.value);
      await Operation.updateProduct(productId, newProduct).then(() => {
        UI.addProductToUI();
        UI.showOrderInBasket();
        UI.clearForm();
      });
    }
  }

  static async addProductToUI() {
    let products = await Operation.getAllProducts();

    //Kategoriye göre filtreleme 
    let materials = products.filter(element => element.category == "Materials");
    let macrames = products.filter(element => element.category == "Macrames");
    let patterns = products.filter(element => element.category == "Patterns");
    allCount.innerHTML = products.length + " Products";
    materialsCount.innerHTML = materials.length + " Products";
    macramesCount.innerHTML = macrames.length + " Products";
    patternsCount.innerHTML = patterns.length + " Products";


    //sorting products
    let filterProducts = Sorting.sortproducts(products);

    //filter 
    if (selectedCategory !== "All") {
      filterProducts = products.filter((product) => {
        return product.category === selectedCategory;
      });
    }

    if (searchKeyword !== "") {

      filterProducts = products.filter((product) => {
        // Arama kelimesi ürün adında varsa true döner
        return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
      }
      )
    }

    productList.innerHTML = '';
    filterProducts.map(product => {
      productList.innerHTML += `
      <div class="col-12 col-lg-3 col-md-6 best-card mt-3">
        <div class="card border-0">
          <div class="overflow-hidden">
            <a >
              <div class="position-relative product-card">
                <img
                  src="${product.image}}"
                  class="img-fluid card-image rounded-3" alt="keyChain">
                <div class="image-overlay">
                  <button  class="btn btn-primary btn-details editbutton"  data-bs-toggle="modal"
                  data-bs-target="#addProduct" data-bs-action="create" id="${product.id}">Edit</button>
                  <button  class="btn btn-secondary btn-add-cart delete-button" onclick="UI.deleteProduct(${product.id})" >Delete</button>
                </div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <h3 class="pt-3 m-0 fs-5 two-line-paragraph">
              ${product.name}
            </h3>
            <p class="fs-6 mb-2">${product.category}</p>
           <div class="d-flex justify-content-between align-items-center">
           <p class="fs-7 mb-0">$${product.price}</p>
           <p class="fs-7 bg-success text-dark rounded-3 py-0 p-2 ">${product.stock}</p>
           </div>
          </div>
          <div class="text-center mb-2"> <button class="btn btn-warning w-75 text-light" ${product.stock < 1 ? "disabled" : ""}  onclick="Operation.addToBasket(${product.id},1)">Add to Basket</button></div>
        </div>
      </div>
      `;
    });

    let editButtons = document.querySelectorAll('.editbutton');
    editButtons.forEach((button) => {
      button.addEventListener('click', async function () {
        saveOrUpdateButton.innerHTML = "Update";
        modalTitle.innerHTML = "Update Product";
        saveOrUpdateButton.setAttribute("blogId", button.id);
        UI.fillForm(await Operation.getProductById(button.id));
      });
    });
  }

  static async deleteProduct(productId) {
    await Operation.deleteProduct(productId);
  }

  static async showOrderInBasket() {
    let totalPrice = 0;
    let orders = await Operation.getAllBasket();
    basketList.innerHTML = '';
    orders.forEach(async (order) => {
      let orderProduct = await Operation.getProductById(order.productId);
      basketList.innerHTML += `
      <tr>
      <th scope="row">
        <div class="d-flex align-items-center">
          <img
            src="${orderProduct.image}}"
            class="img-fluid rounded-3" style="width: 120px;" alt="Book">
          <div class="flex-column ms-4">
            <h5 class="mb-0">${orderProduct.name}</h5>
            <p class="fw-light">${orderProduct.explanation}</p>
          </div>
        </div>
      </th>
      <td class="align-middle">
        <div class="d-flex flex-row align-items-center">
          <button class="btn btn-link px-2"
            onclick="Operation.addToBasket(${order.productId},-1)">
            <i class="fas fa-minus"></i>
          </button>

          <p class="form-control form-control-sm mb-0" />${order.quantity}</p>

          <button class="btn btn-link px-2"
          onclick="Operation.addToBasket(${order.productId},1)">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </td>
      <td class="align-middle">
        <p class="mb-0" style="font-weight: 500;">$${orderProduct.price * order.quantity}</p>
      </td>
      <td class="align-middle">

      <button" class="btn btn-link px-2" onclick="Operation.deleteBasketItem(${order.id})">
      <img src="./src/Assets/icon/delete.png">
      </button>
      </td>
    </tr>
      `;
      totalPrice += orderProduct.price * order.quantity;
      basketTotalPrice.innerText = "$" + totalPrice.toFixed(2);
    });
    basketTotalPrice.innerText = " ";
  }
}

