class RequestCart {
  static showAllCartFromRequest = function() {
    const cartItems = crudCart.get();
    cartItems.then((item) => {
      UICart.updateDisplayForCart(item);
      cartItemCount.innerHTML = item.length;
    })
    .catch((error) => UI.alertMessage(error));
  }

  static addNewProductToCartRequest = function(cartProductId) {
    const cartItems = crudCart.get();
    cartItems.then((item) => {
      const cartProduct = item.find((product) => product.id === cartProductId);
      if(cartProduct) {
        UI.alertMessage('Product already added to cart');
      } else {
        const cartProduct = crudProducts.getSingleProduct(cartProductId);
        cartProduct.then((item) => {
          console.log(item);
          crudCart.post(item);
          UI.alertMessage('Product added to cart');
          UICart.updateCartCount();
        })
        .catch((error) => UI.alertMessage(error));
      }
    })
    .catch((error) => UI.alertMessage(error));
  }
}