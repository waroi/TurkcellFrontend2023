class UICart {
  static updateDisplayForCart = function(products) {
    cartBody.innerHTML = '';
    products.forEach((item) => {
      this.addProduct4CartFromUICart(item);
    });
  }

  static addProduct4CartFromUICart(product) {
    const newCartRow = document.createElement('row');
    newCartRow.className = 'row mb-3 align-items-center border-bottom pb-2';
    newCartRow.innerHTML = `
    <div class="col-3 p-1">
      <img src="${product.imageUrl}" alt="${product.name}" class="img-fluid rounded">
    </div>
    <div class="col-9">
      <div class="d-flex justify-content-between">
        <h6>${product.name}</h6>
        <span class="fa-solid fa-trash px-3 pb-2 rounded cartSpanButton"></span>
      </div>
      <div>
        <p class="fs-6">${product.category}</p>
      </div>
      <div class="d-flex gap-3">
          <span class="me-3">Ürün Adedi</span>
          <span class="bg-danger px-2 py-1 rounded fa-solid fa-minus cartSpanButton"></span>
          <span class="fs-6 cartStok">${product.stok}</span>
          <span class="bg-secondary px-2 py-1 rounded fa-solid fa-plus cartSpanButton"></span>
      </div>
      <div>
          <p class="fs-6">${product.price}</p>
        </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-danger">Sepetten Çıkar</button>
      </div>
    </div>
    `;
    cartBody.appendChild(newCartRow);
  }

  static increaseStok4Cart = function(e) {
    const cartStok = document.querySelector('.cartStok');
    if(e.target.classList.contains('fa-plus')) {
      cartStok.innerHTML++;
    }
  }

  static decreaseStok4Cart = function(e) {
    const cartStok = document.querySelector('.cartStok');
    if(e.target.classList.contains('fa-minus')) {
      if(cartStok.innerHTML > 0) cartStok.innerHTML--;
      else {
        //0 olunca sepetten silinecek
        cartStok.innerHTML = 0;
        alert('Stok adedi 0\'dan küçük olamaz!');
      }
    }
  }

  static updateCartCount = function() {
    cartItemCount.innerHTML = '';
    const cartItems = crudCart.get();
    cartItems.then((item) => {
      cartItemCount.innerHTML = item.length;
    })
    .catch((error) => UI.alertMessage(error));
  }
}