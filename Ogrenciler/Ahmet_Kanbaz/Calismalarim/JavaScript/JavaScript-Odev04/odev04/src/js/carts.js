class Carts {
  static addNewProduct4Cart = function(e) {
    if(e.target.id === 'addCart') {
      const cartProductId = e.target.parentElement.parentElement.parentElement.id;
      RequestCart.addNewProductToCartRequest(cartProductId);
    }
  }
}