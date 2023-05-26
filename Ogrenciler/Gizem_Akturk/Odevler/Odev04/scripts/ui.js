import { elements } from "./selectors.js";
import { Product } from "./product.js";
import { Cart } from "./cart.js";

const cart = new Cart();

class UI {
  static loadAllProductsToUI(products) {
    document.getElementById("products").innerHTML = "";
    products.map(async (product) => {
      await this.addProductToUI(product);
    });
  }
  static async addProductToUI(product) {
    const productItem = document.createElement("li");
    productItem.id = product.id;
    productItem.innerHTML = await UI.buildProductCard(product);
    productItem.addEventListener("mouseover", this.addHoverEffect);
    productItem.addEventListener("mouseout", this.removeHoverEffect);
    productItem.addEventListener("click", this.addProductToCart);
    // productItem.addEventListener("click", this.increaseProductQuantity);
    // productItem.addEventListener("click", this.decreaseProductQuantity);
    productItem.addEventListener("click", this.deleteProductEvent);
    productItem.addEventListener("click", this.updateProductEvent);
    // productItem.addEventListener("click", this.contentEntityEvent);
    elements.productList.appendChild(productItem);
  }

  static async deleteProductEvent(e) {
    if (e.target.id !== "delete-product") {
      return;
    }
    const productId = e.target.getAttribute("data-product-id");
    if (confirm("Are you sure?")) {
      const product = new Product(productId);
      await product.deleteProduct();
      await new Product().getAllProducts();
    }
  }

  static async updateProductEvent(e) {
    if (e.target.id !== "update-product") {
      return;
    }
    const productId = e.target.getAttribute("data-product-id");
    const product = await new Product(productId).getProductById();
    elements.productDetail.innerHTML = await UI.buildProductDetail(product);

    const saveEditedButton = document.getElementById("save-edited-product");

    saveEditedButton.addEventListener("click", async (e2) => {
      if (e2.target.id !== "save-edited-product") {
        return;
      }

      e2.preventDefault();
      const editedName = document.getElementById("edited-name").value;
      const editedPrice = document.getElementById("edited-price").value;
      const editedImgUrl = document.getElementById("edited-imgUrl").value;
      const editedCategory = document.getElementById("edited-category").value;
      const editedStock = document.getElementById("edited-stock").value;

      const newProduct = new Product(
        productId,
        editedName,
        product.content,
        editedPrice,
        editedImgUrl,
        editedCategory,
        editedStock
      );

      await newProduct.updateProduct();

      // Close the modal
      const modalInstance = bootstrap.Modal.getInstance(elements.editModal);
      modalInstance.hide();
      await new Product().getAllProducts();
    });
  }

  static async buildProductDetail(product) {
    return `
    <div class="card">
    <img src="${product.imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <form id="update-product-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input  type="text" class="form-control" id="edited-name" value="${product.name}">
          <label for="price">Price</label>
          <input  type="text" class="form-control" id="edited-price" value="${product.price}">
          <label for="category">Category</label>
          <input  type="text" class="form-control" id="edited-category" value="${product.category}">
          <label for="imgUrl">Image Url</label>
          <input  type="text" class="form-control" id="edited-imgUrl" value="${product.imgUrl}">
          <label for="stock">Stock</label>
          <input  type="text" class="form-control" id="edited-stock" value="${product.stock}">
          </div>         
    </div>
  </div>
    `;
  }

  static async increaseProductQuantity(e) {
    if (e.target.id == "increase-product-quantity") {
      console.log(e.target.getAttribute("data-cart-product-id"));
      await cart.increaseProductQuantity(
        e.target.getAttribute("data-cart-product-id")
      );
      await UI.updateProductQuantity();
    }
  }

  static async decreaseProductQuantity(e) {
    if (e.target.id == "decrease-product-quantity") {
      await cart.decreaseProductQuantity(
        e.target.getAttribute("data-cart-product-id")
      );
      await UI.updateProductQuantity();
    }
  }

  static async updateProductQuantity() {
    const cartList = await cart.getAllCart();
    cartList.map((cartProduct) => {
      const cartItemCard = document.getElementById(
        "cart-item-" + cartProduct.id
      );
      if (cartItemCard) {
        this.updateCartProductQuantity(cartItemCard, cartProduct);
      }
    });
  }

  static async addProductToCart(e) {
    if (e.target.id == "add-to-cart") {
      const product = await new Product(
        e.target.getAttribute("data-product-id")
      ).getProductById();

      const cart = new Cart();
      await cart.addProductToCart(product);
    }
  }

  static async updateCartItems() {
    const cartList = await cart.getAllCart();
    cartList.map(async (cartProduct) => {
      await this.updateCartQuantityProductUI(cartProduct);
    });
  }

  static async deleteCartProductUI(cartProduct) {
    const cartItemCard = document.getElementById("cart-item-" + cartProduct.id);
    cartItemCard.remove();
  }

  static async updateCartQuantityProductUI(cartProduct) {
    const cartItemCard = document.getElementById(cartProduct.product.id);
    cartItemCard.innerHTML = await UI.buildProductCard(cartProduct.product);
    const productInCart = document.getElementById(
      "cart-item-" + cartProduct.id
    );
    if (productInCart) {
      this.updateCartProductQuantity(productInCart, cartProduct);
    }
  }

  static updateCartProductQuantity(productInCart, cartProduct) {
    productInCart.querySelector("#product-quantity-in-cart").innerHTML =
      cartProduct.quantity;
    productInCart.querySelector("#product-price-in-cart").innerHTML =
      cartProduct.quantity * cartProduct.product.price;
  }

  static addHoverEffect() {
    this.classList.add("hover");
    this.querySelector(".edit").classList.remove("hidden");
  }

  static removeHoverEffect() {
    this.classList.remove("hover");
    this.querySelector(".edit").classList.add("hidden");
  }

  static loadAllCartItemsToUI(cartItems) {
    cartItems.map((cartItem) => {
      this.addCartItemToUI(cartItem);
    });
  }

  static async addCartItemToUI(cartItem) {
    const cartItemCard = document.createElement("div");
    cartItemCard.id = "cart-item-" + cartItem.id;
    cartItemCard.innerHTML = await UI.buildCartCard(cartItem);
    cartItemCard.addEventListener("click", this.increaseProductQuantity);
    cartItemCard.addEventListener("click", this.decreaseProductQuantity);
    elements.cartList.appendChild(cartItemCard);
  }

  static async buildCartCard(cartItem) {
    return `
    <div class="row">
    <div class="col-2">
        <img src="./images/banner-1.jpg" class="img-fluid" alt="...">
    </div>
    <div class="col-4">
        <h6>${cartItem.product.name}</h6>
    </div>
    <div class="col-2">
        <h6>$${cartItem.product.price}</h6>
    </div>
    <div  class="col-2">
       <div class="btn-group" role="group" aria-label="Basic example">
           <button id="decrease-product-quantity" data-cart-product-id="${
             cartItem.product.id
           }" type="button" class="btn btn-secondary btn-sm">-</button>
        <button type="button" id="product-quantity-in-cart" class="btn disabled btn-secondary btn-sm cart-product-quantity">${await cart.getQuantityOfProductInCart(
          cartItem.product.id
        )}</button>
          <button id="increase-product-quantity" data-cart-product-id="${
            cartItem.product.id
          }" type="button" class="btn btn-secondary btn-sm">+</button>
      </div>
    </div>
    <div id="product-price-in-cart" class="col-2">
        <h6>$${cartItem.quantity * cartItem.product.price}</h6>
    </div>
</div>
<hr>
    `;
  }

  static async buildProductCard(product) {
    const isExists = await cart.checkProductInCart(product.id);
    return `
    <div class="card" style=" position: relative;">
        <div class="edit hidden me-2 mt-1" style="position: absolute; top: 0; right: 0;">
            <a id="update-product" data-product-id="${
              product.id
            }" class="btn btn-success rounded-circle mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-pencil"></i></a>
            <a href="#" id="delete-product" data-product-id="${
              product.id
            }"  class="btn btn-danger rounded-circle mt-1"><i
                    class="fa fa-trash"></i></a>

        </div>
        <img src="${product.imgUrl}" class="img-fluid rounded product-img" 
            alt="...">
        <div class="card-body">

            <div class="row">
                <div class="col-8">
                    <h5 class="card-title">${product.name}</h5>
                </div>
                <div class="col-4">
                    <h5>$${product.price}</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="card-text text-muted" style="font-size: 0.75rem">${
                      product.category
                    }</p>
                </div>
            </div>
            <div class="row mb-2 mt-2">
                <div class="col-6 d-flex align-items-center">
                    <p class="card-text text-muted" style="font-size: 0.75rem">
                        <!-- Rates -->
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #FFD700;"></i>
                        <i class="fa fa-star" style="color: #a7a599;"></i>
                        <span>(123)</span>
                    </p>
                </div>
                <div class="col-6 text-end">
                    ${
                      // check if product is in cart
                      // !isExists
                      // ? `<button id="add-to-cart" data-product-id="${product.id}" class="btn btn-primary btn-sm">Add to cart</button>`
                      // : `
                      //   <div class="btn-group" role="group" aria-label="Basic example">
                      //       <button id="decrease-product-quantity" data-cart-product-id="${product.id}" type="button" class="btn btn-secondary btn-sm">-</button>
                      //       <button type="button" class="btn disabled btn-secondary btn-sm cart-product-quantity">${await cart.getQuantityOfProductInCart(product.id)}</button>
                      //       <button id="increase-product-quantity" data-cart-product-id="${product.id}" type="button" class="btn btn-secondary btn-sm">+</button>
                      //   </div>
                      // `
                      `<button id="add-to-cart" data-product-id="${
                        product.id
                      }" class="btn btn-primary btn-sm  text-white">Add to cart</button>
                        ${
                          isExists
                            ? `<span class="badge bg-primary rounded-pill">In cart</span>`
                            : ""
                        }
                        `
                    }
                </div>
            </div>
        </div>
    </div>
            `;
  }
  static deleteProductFromUI(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  static async updateProductToUI(product) {
    const productItem = document.getElementById(product.id);
    productItem.innerHTML = await UI.buildProductCard(product);
  }
  static fillInputs(product) {
    elements.productName.value = product.name;
    elements.productContent.value = product.content;
    elements.productPrice.value = product.price;
    elements.productImgUrl.value = product.imgUrl;
    elements.productCategory.value = product.category;
    elements.productStock.value = product.stock;
  }
  static clearInputs() {
    // elements.productName.value = "";
    // elements.productContent.value = "";
    // elements.productPrice.value = "";
    // elements.productImgUrl.value = "";
    // elements.productCategory.value = "";
    // elements.productStock.value = "";
  }
  static contentProductToUI(product) {
    const productItem = document.getElementById(product.id);
    productItem.innerHTML = UI.buildProductCard(product);
  }

  static showAlert(message, className) {
    // show toast alert
    const alert = document.createElement("div");
    alert.className = `alert alert-${className}`;
    alert.textContent = message;
    alert.style.position = "fixed";
    alert.style.top = "75px";
    alert.style.right = "15px";
    alert.style.zIndex = "99";
    document.body.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
}
export { UI };
