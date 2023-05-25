function cartItem(product) {
  return `
  <div class="cart-item d-flex align-items-center">
          <div class="cart-item-img">
            <img src="${product.image}" alt="" />
          </div>
          <div class="cart-item-info">
            <h5 class="cart-item-name">${product.name}</h5>
            <span class="amount-controls d-flex align-items-center">
              <div class="btn-minus" id="btn-minus">-</div>
              <div class="order-count">${product.count}</div>
              <div class="btn-plus" id="btn-plus">+</div>
              <div id="item-total-price">$${product.count * product.price}</div>
            </span>
          </div>
        </div>
    `;
}

export default cartItem;
