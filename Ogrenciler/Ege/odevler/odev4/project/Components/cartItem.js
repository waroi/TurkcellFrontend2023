function cartItem(product) {
  return `
  <div class="cart-item d-flex align-items-center mb-5" data-identifier="${
    product.id
  }">
          <div class="cart-item-img">
            <img src="${product.image}" alt="" />
          </div>
          <div class="cart-item-info">
            <h5 class="cart-item-name">${product.name}</h5>
            <div id="item-total-price">$${Number.parseFloat(
              product.count * product.price
            ).toFixed(2)}</div>
            <span class="amount-controls d-flex align-items-center">
            <div class="btn-plus" id="btn-plus">+</div>
            <div class="order-count">${product.count}</div>
            <div class="btn-minus" id="btn-minus">-</div>
            </span>
            <button class="btn btn-danger remove-all-cart w-100 mt-3">Remove</button>
          </div>
        </div>
    `;
}

export default cartItem;
