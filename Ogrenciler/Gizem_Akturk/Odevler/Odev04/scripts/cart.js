import { UI } from "./ui.js";
import Request from "./requests.js";
import { elements } from "./selectors.js";
import { Product } from "./product.js";

const CART_URL = "http://localhost:3000/cart";
const request = new Request(CART_URL);

class Cart {
  async getAllCart() {
    return await request.getAll();
  }
  async fetchNumberOfProductsInCart() {
    const numberOfProductsInCart = await this.getNumberOfProductsInCart();
    elements.cartBadge.innerHTML = numberOfProductsInCart;
  }
  async getCartList() {
    request
      .getAll()
      .then((cartList) => {
        UI.loadAllCartItemsToUI(cartList);
        this.fetchNumberOfProductsInCart();
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async addProductToCart(product) {
    if (product.stock <= 0) {
      UI.showAlert("Stokta ürün kalmadı", "danger");
      return;
    }

    const cart = await this.getAllCart();
    const cartProduct = cart.find(
      (cartProduct) => cartProduct.product.id === product.id
    );

    if (cartProduct) {
      cartProduct.quantity++;
      product.stock--;
      cartProduct.product.stock--;

      await this.updateCartProduct(cartProduct);
      await this.updateProductAndCart(product, cartProduct);
    } else {
      product.stock--;
      const newCartProduct = {
        product: product,
        quantity: 1,
      };

      try {
        const addedCartProduct = await request.post(newCartProduct);
        UI.showAlert("Product başarıyla eklendi", "success");
        await UI.addCartItemToUI(addedCartProduct);
        await this.updateCartProduct(addedCartProduct);
        await this.updateProductAndCart(product, addedCartProduct);
      } catch (err) {
        UI.showAlert(err, "danger");
      }
    }
  }

  async updateProductAndCart(product, cartProduct) {
    const updatedProduct = new Product(
      product.id,
      product.name,
      product.content,
      product.price,
      product.imgUrl,
      product.category,
      product.stock
    );

    await updatedProduct.updateProduct();
    await this.fetchNumberOfProductsInCart();
  }

  async getNumberOfProductsInCart() {
    const cart = await this.getAllCart();
    return cart.length;
  }

  async updateCartProduct(cartProduct) {
    request
      .put(cartProduct)
      .then(async (cartProduct) => {
        UI.showAlert("Product başarıyla güncellendi", "success");
        await UI.updateCartQuantityProductUI(cartProduct);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async deleteCartProduct(cartProduct) {
    request
      .delete(cartProduct.id)
      .then(() => {
        UI.showAlert("Product başarıyla silindi", "success");
        UI.deleteCartProductUI(cartProduct);
      })
      .catch((err) => UI.showAlert(err, "danger"));
  }

  async checkProductInCart(productId) {
    const cart = await this.getAllCart();
    const cartProduct = cart.find(
      (cartProduct) => cartProduct.product.id === productId
    );
    return cartProduct ? true : false;
  }

  async increaseProductQuantity(productId) {
    productId = parseInt(productId);

    const cart = await this.getAllCart();
    const cartProduct = cart.find(
      (cartProduct) => cartProduct.product.id === productId
    );
    if (cartProduct.quantity > cartProduct.product.stock) {
      UI.showAlert("Stokta ürün kalmadı", "danger");
      return;
    }
    cartProduct.quantity++;
    await this.fetchNumberOfProductsInCart();

    // update product stock
    cartProduct.product.stock = cartProduct.product.stock - 1;
    await this.updateCartProduct(cartProduct);
    console.log(cartProduct.product.stock);
    const updatedProduct = new Product(
      cartProduct.product.id,
      cartProduct.product.name,
      cartProduct.product.content,
      cartProduct.product.price,
      cartProduct.product.imgUrl,
      cartProduct.product.category,
      cartProduct.product.stock
    );
    console.log(updatedProduct);
    await updatedProduct.updateProduct();
  }

  async decreaseProductQuantity(productId) {
    productId = parseInt(productId);
    const cart = await this.getAllCart();
    const cartProduct = cart.find(
      (cartProduct) => cartProduct.product.id === productId
    );
    if (cartProduct.quantity > 1) {
      cartProduct.quantity--;
      cartProduct.product.stock++;
      await this.updateCartProduct(cartProduct);
      await this.fetchNumberOfProductsInCart();

      // update product stock
      const updatedProduct = new Product(
        cartProduct.product.id,
        cartProduct.product.name,
        cartProduct.product.content,
        cartProduct.product.price,
        cartProduct.product.imgUrl,
        cartProduct.product.category,
        cartProduct.product.stock
      );
      console.log(updatedProduct);
      await updatedProduct.updateProduct();
    } else {
      cartProduct.product.stock++;
      const updatedProduct = new Product(
        cartProduct.product.id,
        cartProduct.product.name,
        cartProduct.product.content,
        cartProduct.product.price,
        cartProduct.product.imgUrl,
        cartProduct.product.category,
        cartProduct.product.stock
      );
      console.log(updatedProduct);
      updatedProduct.updateProduct();
      await this.updateCartProduct(cartProduct);
      await this.deleteCartProduct(cartProduct);
      await this.fetchNumberOfProductsInCart();
    }
  }

  async deleteProductFromCart(productId) {
    const cart = await this.getAllCart();
    const cartProduct = cart.find(
      (cartProduct) => cartProduct.product.id === productId
    );
    this.deleteCartProduct(cartProduct.id);
  }

  async getQuantityOfProductInCart(productId) {
    const cart = await this.getAllCart();
    const cartProduct = cart.find(
      (cartProduct) => cartProduct.product.id === productId
    );
    return cartProduct ? cartProduct.quantity : 0;
  }

  async deleteAllProductsFromCart() {
    const cart = await this.getAllCart();
    cart.map((cartProduct) => {
      this.deleteCartProduct(cartProduct);
    });
  }
}
export { Cart };
