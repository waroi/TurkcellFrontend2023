function createCartProduct(cart) {
  return `<div class="row cart-item mt-4" id="product-row" data-id="${cart.id}">
  <div class="col-md-4">
    <img class="img-fluid" id="cart-product-image"
      src="${cart.productImage}">
  </div>
  <div class="col-md-8" id="product-text-area">
    <h6 id="cart-product-text">${cart.title}</h6>
    <p>Category: <span id="cart-product-category">${cart.category}</span></p>
    <p>In Stock: <span id="cart-in-stock">${cart.stock}</span></p>
    <p>Quantity: <span id="cart-in-quantity">${cart.quantity}</span></p>
    <p>Cost per Item: <span id="card-product-cost">${cart.price}</span><span>$</span></p>
    <button id="product-quantity-plus"  class="btn btn-warning w-25">+</button>
    <button id="product-quantity-minus"  class="btn btn-primary w-25">-</button>
    <button id="product-delete" class="btn bg-black  text-white w-25">X</button>
  </div>
</div>`
}

export default createCartProduct